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
exports.ProductController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const swagger_1 = require("@nestjs/swagger");
const Paging_1 = require("../../common/response/Paging");
const ResponseData_1 = require("../../common/response/ResponseData");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async getListsProducts(req) {
        const paging = {
            page: req.query.page || 1,
            page_size: req.query.page_size || 10,
        };
        const filters = {
            hot: req.query.hot || "",
            status: req.query.status || "",
            sort: req.query.sort || "",
            name: req.query.name || "",
            category_id: req.query.category_id || "",
            product_ids: req.query.product_ids || "",
            sale: req.query.sale || ""
        };
        const response = await this.productService.getListsProducts(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data, "success", pagingData);
    }
    async show(id) {
        try {
            const data = await this.productService.show(id);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
        }
        catch (e) {
            console.log('----------ERROR: ProductController@show => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
    async showSlug(slug) {
        try {
            const data = await this.productService.showSlug(slug);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
        }
        catch (e) {
            console.log('----------ERROR: ProductController@show => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
};
__decorate([
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getListsProducts", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "show", null);
__decorate([
    (0, common_1.Get)('show-slug/:slug'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "showSlug", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    (0, swagger_1.ApiTags)("Product"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map