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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("../../entities/article.entity");
const Function_1 = require("../../common/helpers/Function");
let ArticleService = class ArticleService {
    async getListsArticles(paging, filters) {
        let condition = {};
        if (filters.hot)
            condition.a_hot = filters.hot;
        if (filters.status)
            condition.a_status = filters.status;
        return await this.articleRepository.findAndCount({
            where: condition,
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
    async store(articleDto) {
        articleDto.a_slug = (0, Function_1.toSlug)(articleDto.a_name);
        const newData = await this.articleRepository.create(articleDto);
        return await this.articleRepository.save(newData);
    }
    async show(id) {
        return await this.articleRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, articleDto) {
        articleDto.a_slug = (0, Function_1.toSlug)(articleDto.a_name);
        await this.articleRepository.update(id, articleDto);
        return await this.show(id);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(article_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], ArticleService.prototype, "articleRepository", void 0);
ArticleService = __decorate([
    (0, common_1.Injectable)()
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map