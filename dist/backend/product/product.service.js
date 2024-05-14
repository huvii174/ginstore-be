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
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../../entities/product.entity");
const Function_1 = require("../../common/helpers/Function");
let ProductService = class ProductService {
    async getListsProducts(paging, filters) {
        let condition = {};
        if (filters.hot)
            condition.c_hot = filters.pro_hot;
        if (filters.status)
            condition.c_status = filters.pro_status;
        return await this.productRepository.findAndCount({
            where: condition,
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
    async store(productDto) {
        productDto.pro_slug = (0, Function_1.toSlug)(productDto.pro_name);
        const newData = await this.productRepository.create(productDto);
        return await this.productRepository.save(newData);
    }
    async show(id) {
        return await this.productRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, productDto) {
        productDto.pro_slug = (0, Function_1.toSlug)(productDto.pro_name);
        await this.productRepository.update(id, productDto);
        return await this.show(id);
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