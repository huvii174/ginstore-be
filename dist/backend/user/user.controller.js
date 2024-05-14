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
const Paging_1 = require("../../common/response/Paging");
const ResponseData_1 = require("../../common/response/ResponseData");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getListsUser(request) {
        const paging = {
            page: request.query.page || 1,
            page_size: request.query.page_size || 10,
        };
        const filters = {
            hot: request.query.hot || "",
            status: request.query.status || "",
        };
        const response = await this.userService.getListsUser(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(200, data, "success", pagingData);
    }
};
__decorate([
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getListsUser", null);
UserController = __decorate([
    (0, common_1.Controller)('cms/user'),
    (0, swagger_1.ApiTags)('BE / User'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map