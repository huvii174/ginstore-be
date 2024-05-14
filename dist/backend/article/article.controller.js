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
exports.ArticleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Paging_1 = require("../../common/response/Paging");
const ResponseData_1 = require("../../common/response/ResponseData");
const article_service_1 = require("./article.service");
const CreateArticle_dto_1 = require("./dto/CreateArticle.dto");
const UpdateArticle_dto_1 = require("./dto/UpdateArticle.dto");
const swagger_1 = require("@nestjs/swagger");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getListsArticles(request) {
        const paging = {
            page: request.query.page || 1,
            page_size: request.query.page_size || 10,
        };
        const filters = {
            hot: request.query.hot || "",
            status: request.query.status || "",
        };
        const response = await this.articleService.getListsArticles(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(200, data, "success", pagingData);
    }
    async store(articleDto) {
        const data = await this.articleService.store(articleDto);
        return new ResponseData_1.ResponseData(200, data);
    }
    async show(id) {
        const data = await this.articleService.show(id);
        return new ResponseData_1.ResponseData(200, data);
    }
    async update(articleDto, id) {
        const response = await this.articleService.update(id, articleDto);
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
], ArticleController.prototype, "getListsArticles", null);
__decorate([
    (0, common_1.Post)('store'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateArticle_dto_1.default]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "store", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "show", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateArticle_dto_1.default, Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
ArticleController = __decorate([
    (0, common_1.Controller)('cms/article'),
    (0, swagger_1.ApiTags)('BE / Article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map