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
exports.VoteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vote_entity_1 = require("../../entities/vote.entity");
const product_service_1 = require("../product/product.service");
let VoteService = class VoteService {
    constructor(productService) {
        this.productService = productService;
    }
    async getListsVote(filters) {
        let condition = {};
        if (filters.status)
            condition.t_status = filters.status;
        if (filters.user_id)
            condition.t_user_id = filters.user_id;
        if (filters.product_id)
            condition.v_product_id = filters.product_id;
        if (filters.number) {
            let number = filters.number.split(',');
            condition.v_number = (0, typeorm_2.In)(number);
        }
        let order = { id: "DESC" };
        return await this.voteRepository.findAndCount({
            where: condition,
            order: order,
            relations: {
                product: true,
                user: true,
                comments: true
            },
            take: filters.page_size,
            skip: (filters.page - 1) * filters.page_size
        });
    }
    async store(voteDto) {
        const product = await this.productService.show(voteDto.v_product_id);
        if (!product) {
            throw new common_1.HttpException(`Sản phẩm có mã ${voteDto.v_product_id} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        voteDto.created_at = new Date();
        const newData = await this.voteRepository.create(voteDto);
        this.productService.incrementProduction(voteDto.v_product_id, voteDto.v_number);
        return await this.voteRepository.save(newData);
    }
    async show(id) {
        return await this.voteRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, voteDto) {
        const product = await this.productService.show(voteDto.v_product_id);
        if (!product) {
            throw new common_1.HttpException(`Sản phẩm có mã ${voteDto.v_product_id} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        delete voteDto.v_number;
        voteDto.updated_at = new Date();
        await this.voteRepository.update(id, voteDto);
        return await this.show(id);
    }
    async delete(id, user_id) {
        const vote = await this.show(id);
        this.productService.decrementProduction(vote.v_product_id, vote.v_number);
        await this.voteRepository.delete(id);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(vote_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], VoteService.prototype, "voteRepository", void 0);
VoteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], VoteService);
exports.VoteService = VoteService;
//# sourceMappingURL=vote.service.js.map