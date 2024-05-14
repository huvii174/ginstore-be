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
exports.MenuController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Paging_1 = require("../../common/response/Paging");
const ResponseData_1 = require("../../common/response/ResponseData");
const menu_service_1 = require("./menu.service");
const CreateMenu_dto_1 = require("./dto/CreateMenu.dto");
const UpdateMenu_dto_1 = require("./dto/UpdateMenu.dto");
const swagger_1 = require("@nestjs/swagger");
let MenuController = class MenuController {
    constructor(menuService) {
        this.menuService = menuService;
    }
    async getListsMenus(request) {
        const paging = {
            page: request.query.page || 1,
            page_size: request.query.page_size || 10,
        };
        const filters = {
            hot: request.query.hot || "",
            status: request.query.status || "",
        };
        const response = await this.menuService.getListsMenus(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(200, data, "success", pagingData);
    }
    async store(menuDto) {
        const data = await this.menuService.store(menuDto);
        return new ResponseData_1.ResponseData(200, data);
    }
    async show(id) {
        const data = await this.menuService.show(id);
        console.log('--------- data: ', id);
        return new ResponseData_1.ResponseData(200, data);
    }
    async update(menuDto, id) {
        const response = await this.menuService.update(id, menuDto);
        return new ResponseData_1.ResponseData(200, response);
    }
};
__decorate([
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "getListsMenus", null);
__decorate([
    (0, common_1.Post)('store'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateMenu_dto_1.default]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "store", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "show", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateMenu_dto_1.default, Number]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "update", null);
MenuController = __decorate([
    (0, common_1.Controller)('cms/menu'),
    (0, swagger_1.ApiTags)('BE / Menu'),
    __metadata("design:paramtypes", [menu_service_1.MenuService])
], MenuController);
exports.MenuController = MenuController;
//# sourceMappingURL=menu.controller.js.map