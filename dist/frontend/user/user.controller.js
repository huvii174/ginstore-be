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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const ResponseData_1 = require("../../common/response/ResponseData");
const UpdateInfoUser_dto_1 = require("./dto/UpdateInfoUser.dto");
const UpdatePhoneUser_dto_1 = require("./dto/UpdatePhoneUser.dto");
const UpdateEmailUser_dto_1 = require("./dto/UpdateEmailUser.dto");
const UpdatePasswordUser_dto_1 = require("./dto/UpdatePasswordUser.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async updateInfo(req, userUpdate) {
        const { id, user } = req.user;
        const data = await this.userService.updateInfo(id, userUpdate);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async updateEmail(req, formData) {
        const { id, user } = req.user;
        const data = await this.userService.updateEmail(id, formData);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async updatePassword(req, formData) {
        const { id, user } = req.user;
        const data = await this.userService.updatePassword(id, formData);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async updatePhone(req, formData) {
        const { id, user } = req.user;
        const data = await this.userService.updatePhone(id, formData);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-info'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateInfoUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateInfo", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-email'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateEmailUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateEmail", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-password'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePasswordUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-phone'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdatePhoneUser_dto_1.default]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePhone", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)("User"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map