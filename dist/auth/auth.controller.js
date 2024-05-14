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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const local_auth_guard_1 = require("./local-auth.guard");
const auth_service_1 = require("./auth.service");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const ResponseData_1 = require("../common/response/ResponseData");
const Register_dto_1 = require("./dto/Register.dto");
const bcrypt = require("bcrypt");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registrationData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        try {
            const createdUser = await this.authService.create(Object.assign(Object.assign({}, registrationData), { password: hashedPassword }));
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, createdUser);
        }
        catch (error) {
            return new ResponseData_1.ResponseData(error.status, error.response, 'error');
        }
    }
    async login(req) {
        try {
            const data = await this.authService.login(req.user);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
        }
        catch (error) {
            console.log('------------ E: ', error);
            return new ResponseData_1.ResponseData(error.status, error.response, 'error');
        }
    }
    async refreshTokens(req) {
        let refresh_token = req.refresh_token;
        const data = await this.authService.refreshTokens(refresh_token);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async getProfile(req) {
        const { id, user } = req.user;
        const data = await this.authService.showUser(id);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Register_dto_1.default]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201, type: require("../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    openapi.ApiResponse({ status: 201, type: require("../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshTokens", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('profile'),
    openapi.ApiResponse({ status: 200, type: require("../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map