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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_entity_1 = require("../entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const refresh_token_entity_1 = require("../entities/refresh_token.entity");
const BASE_OPTIONS = {
    issuer: 'https://my-app.com',
    audience: 'https://my-app.com',
};
let TokensService = class TokensService {
    async generateAccessToken(user) {
        const opts = Object.assign(Object.assign({}, BASE_OPTIONS), { subject: String(user.id) });
        console.log('----------- opts: ', opts);
        return this.jwt.signAsync({}, opts);
    }
    async generateRefreshToken(user, expiresIn) {
        const token = await this.createRefreshToken(user, expiresIn);
        const opts = Object.assign(Object.assign({}, BASE_OPTIONS), { expiresIn, subject: String(user.id), jwtid: String(token.id) });
        return this.jwt.signAsync({}, opts);
    }
    async createRefreshToken(user, expiresIn) {
        const token = new refresh_token_entity_1.default();
        token.user_id = user.id;
        token.is_revoked = false;
        const expiration = new Date();
        expiration.setTime(expiration.getTime() + expiresIn);
        token.expires = expiration;
        const data = await this.refreshTokenRepository.create(token);
        return await this.refreshTokenRepository.save(data);
    }
    async resolveRefreshToken(encoded) {
        const payload = await this.decodeRefreshToken(encoded);
        const token = await this.getStoredTokenFromRefreshTokenPayload(payload);
        if (!token) {
            throw new common_1.UnprocessableEntityException('Refresh token not found');
        }
        if (token.is_revoked) {
            throw new common_1.UnprocessableEntityException('Refresh token revoked');
        }
        const user = await this.getUserFromRefreshTokenPayload(payload);
        if (!user) {
            throw new common_1.UnprocessableEntityException('Refresh token malformed');
        }
        return { user, token };
    }
    async createAccessTokenFromRefreshToken(refresh) {
        const { user } = await this.resolveRefreshToken(refresh);
        const token = await this.generateAccessToken(user);
        return { user, token };
    }
    async decodeRefreshToken(token) {
        try {
            return this.jwt.verifyAsync(token);
        }
        catch (e) {
            if (e instanceof jsonwebtoken_1.TokenExpiredError) {
                throw new common_1.UnprocessableEntityException('Refresh token expired');
            }
            else {
                throw new common_1.UnprocessableEntityException('Refresh token malformed');
            }
        }
    }
    async getUserFromRefreshTokenPayload(payload) {
        const subId = payload.sub;
        if (!subId) {
            throw new common_1.UnprocessableEntityException('Refresh token malformed');
        }
        return this.userRepository.findOne({
            where: {
                id: subId
            }
        });
    }
    async getStoredTokenFromRefreshTokenPayload(payload) {
        const tokenId = payload.jti;
        if (!tokenId) {
            throw new common_1.UnprocessableEntityException('Refresh token malformed');
        }
        return await this.findTokenById(Number(tokenId));
    }
    async findTokenById(tokenId) {
        return await this.refreshTokenRepository.findOne({
            where: {
                id: tokenId
            }
        });
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(refresh_token_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], TokensService.prototype, "refreshTokenRepository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], TokensService.prototype, "userRepository", void 0);
TokensService = __decorate([
    (0, common_1.Injectable)()
], TokensService);
exports.TokensService = TokensService;
//# sourceMappingURL=token.service.js.map