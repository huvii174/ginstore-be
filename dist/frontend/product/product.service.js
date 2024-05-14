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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../../entities/product.entity");
const typeorm_2 = require("typeorm");
let ProductService = class ProductService {
    async getListsProducts(paging, filters) {
        let condition = {};
        if (filters.hot)
            condition.c_hot = filters.pro_hot;
        if (filters.status)
            condition.c_status = filters.pro_status;
        if (filters.category_id)
            condition.pro_category_id = filters.category_id;
        if (filters.sale) {
            condition.pro_discount_value = (0, typeorm_2.MoreThan)(0);
        }
        if (filters.name) {
            condition.pro_name = (0, typeorm_2.Like)(`or %${filters.name}%`);
            condition.pro_slug = (0, typeorm_2.Like)(`or %${filters.name}%`);
        }
        console.log('------------ product_ids: ', filters.product_ids);
        if (filters.product_ids) {
            let ids = filters.product_ids.split(',');
            condition.id = (0, typeorm_2.In)(ids);
        }
        let order = { id: "DESC" };
        if (filters.sort) {
            let arrSort = filters.sort.split(",");
            if (arrSort[0] && arrSort[1]) {
                let orderBy = arrSort[1] == "desc" ? "DESC" : "ASC";
                if (arrSort[0] == "pro_sale") {
                    order = { pro_sale: orderBy };
                }
            }
        }
        return await this.productRepository.findAndCount({
            where: condition,
            order: order,
            relations: {
                category: true
            },
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
    async show(id) {
        return await this.productRepository.findOne({
            where: {
                id: id
            },
            relations: { category: true },
        });
    }
    async showSlug(slug) {
        return await this.productRepository.findOne({
            where: {
                pro_slug: slug
            },
            relations: { category: true },
        });
    }
    async incrementProduction(id, vote) {
        const product = await this.productRepository.findOne({
            where: {
                id: id
            }
        });
        if (product) {
            product.pro_review_total++;
            product.pro_review_star += vote;
            await this.productRepository.save(product);
        }
    }
    async decrementProduction(id, vote) {
        const product = await this.productRepository.findOne({
            where: {
                id: id
            }
        });
        if (product) {
            product.pro_review_total--;
            product.pro_review_star -= vote;
            await this.productRepository.save(product);
        }
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(product_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], ProductService.prototype, "productRepository", void 0);
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map