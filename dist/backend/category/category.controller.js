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
exports.CategoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const category_service_1 = require("./category.service");
const CreateCategory_dto_1 = require("./dto/CreateCategory.dto");
const UpdateCategory_dto_1 = require("./dto/UpdateCategory.dto");
const ResponseData_1 = require("../../common/response/ResponseData");
const Paging_1 = require("../../common/response/Paging");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getListsCategory(request) {
        const paging = {
            page: request.query.page || 1,
            page_size: request.query.page_size || 10,
        };
        const filters = {
            hot: request.query.hot || "",
            status: request.query.status || "",
        };
        const response = await this.categoryService.getListsCategory(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(200, data, "success", pagingData);
    }
    async store(categoryDto) {
        const data = await this.categoryService.store(categoryDto);
        return new ResponseData_1.ResponseData(200, data);
    }
    async show(id) {
        const data = await this.categoryService.show(id);
        return new ResponseData_1.ResponseData(200, data);
    }
    async update(categoryDto, id) {
        const response = await this.categoryService.update(id, categoryDto);
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
], CategoryController.prototype, "getListsCategory", null);
__decorate([
    (0, common_1.Post)('store'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCategory_dto_1.default]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "store", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "show", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateCategory_dto_1.default, Number]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
CategoryController = __decorate([
    (0, common_1.Controller)('cms/category'),
    (0, swagger_1.ApiTags)('BE / Category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map