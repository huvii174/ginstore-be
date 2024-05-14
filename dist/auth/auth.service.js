"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../frontend/user/user.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async validateUser(username, pass) {
        const user = await this.userService.findOneByUsername(username);
        if (user) {
            const isMatchPassword = await bcrypt.compare(pass, user.password);
            if (isMatchPassword === true) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            throw new common_1.HttpException(`${pass} không chính xác`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        throw new common_1.HttpException(`${username} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async login(user) {
        const tokens = await this.getTokens(user.id, user.phone);
        await this.userService.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async create(userDto) {
        const checkUsername = await this.userService.findOneByUsername(userDto.username);
        if (checkUsername) {
            throw new common_1.HttpException(`${userDto.username} đã tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const checkEmail = await this.userService.findOneByEmail(userDto.email);
        if (checkEmail) {
            throw new common_1.HttpException(`${userDto.email} đã tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const checkPhone = await this.userService.findOneByPhone(userDto.phone);
        if (checkPhone) {
            throw new common_1.HttpException(`${userDto.phone} đã tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const user = await this.userService.register(userDto);
        if (user) {
            return await this.login(user);
        }
        throw new common_1.HttpException('Error create user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
    async showUser(id) {
        return await this.userService.findById(id);
    }
    async refreshTokens(refreshToken) {
        let decoded = this.jwtService.verify(refreshToken, this.configService.get('JWT_REFRESH_SECRET'));
        if (!decoded) {
            throw new common_1.BadRequestException("Không tồn tại Refresh token");
        }
        const user = await this.userService.findById(decoded.sub);
        if (!user || !user.refresh_token)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.username);
        await this.userService.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async getTokens(userId, username) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                expiresIn: '15m',
            }),
            this.jwtService.signAsync({
                sub: userId,
                username,
            }, {
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map