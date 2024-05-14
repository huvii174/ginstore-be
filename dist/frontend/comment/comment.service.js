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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("../../entities/comment.entity");
let CommentService = class CommentService {
    async getListsComments(user_id, filters) {
        let condition = {};
        if (filters.status)
            condition.t_status = filters.status;
        if (filters.user_id)
            condition.t_user_id = filters.user_id;
        let order = { id: "DESC" };
        console.log('------------- filters: ', filters);
        return await this.commentRepository.findAndCount({
            where: condition,
            order: order,
            take: filters.page_size,
            skip: (filters.page - 1) * filters.page_size
        });
    }
    async store(commentDto) {
        const newData = await this.commentRepository.create(commentDto);
        return await this.commentRepository.save(newData);
    }
    async show(id) {
        return await this.commentRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, commentDto) {
        await this.commentRepository.update(id, commentDto);
        return await this.show(id);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(comment_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], CommentService.prototype, "commentRepository", void 0);
CommentService = __decorate([
    (0, common_1.Injectable)()
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map