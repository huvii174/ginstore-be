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
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const vote_entity_1 = require("./vote.entity");
let Comment = class Comment {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, c_name: { required: true, type: () => String }, c_content: { required: true, type: () => String }, c_product_id: { required: true, type: () => Number }, c_user_id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, vote: { required: true, type: () => require("./vote.entity").default } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "c_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "c_content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Comment.prototype, "c_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Comment.prototype, "c_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Comment.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Comment.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vote_entity_1.default, (vote) => vote.comments),
    (0, typeorm_1.JoinColumn)({ name: "c_vote_id", referencedColumnName: "id" }),
    __metadata("design:type", vote_entity_1.default)
], Comment.prototype, "vote", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)('comments')
], Comment);
exports.default = Comment;
//# sourceMappingURL=comment.entity.js.map