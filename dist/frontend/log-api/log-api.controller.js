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
exports.LogApiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const log_api_service_1 = require("./log-api.service");
const ResponseData_1 = require("../../common/response/ResponseData");
let LogApiController = class LogApiController {
    constructor(logApiService) {
        this.logApiService = logApiService;
    }
    async store(formData) {
        const data = await this.logApiService.store(formData);
        return new ResponseData_1.ResponseData(200, data);
    }
};
__decorate([
    (0, common_1.Post)('store'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LogApiController.prototype, "store", null);
LogApiController = __decorate([
    (0, common_1.Controller)('log-api'),
    (0, swagger_1.ApiTags)('Log API'),
    __metadata("design:paramtypes", [log_api_service_1.LogApiService])
], LogApiController);
exports.LogApiController = LogApiController;
//# sourceMappingURL=log-api.controller.js.map