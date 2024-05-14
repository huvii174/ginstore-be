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
const product_entity_1 = require("./product.entity");
const user_entity_1 = require("./user.entity");
const comment_entity_1 = require("./comment.entity");
let Vote = class Vote {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, v_content: { required: true, type: () => String }, v_user_id: { required: true, type: () => Number }, v_product_id: { required: true, type: () => Number }, v_number: { required: true, type: () => Number }, v_status: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, product: { required: true, type: () => require("./product.entity").default }, user: { required: true, type: () => require("./user.entity").default }, comments: { required: true, type: () => [require("./comment.entity").default] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vote.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vote.prototype, "v_content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vote.prototype, "v_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vote.prototype, "v_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vote.prototype, "v_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vote.prototype, "v_status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Vote.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Vote.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.default, (product) => product.votes),
    (0, typeorm_1.JoinColumn)({ name: "v_product_id", referencedColumnName: "id" }),
    __metadata("design:type", product_entity_1.default)
], Vote.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default, (user) => user.votes),
    (0, typeorm_1.JoinColumn)({ name: "v_user_id", referencedColumnName: "id" }),
    __metadata("design:type", user_entity_1.default)
], Vote.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.default, (comment) => comment.vote),
    (0, typeorm_1.JoinColumn)({ name: "id", referencedColumnName: "c_vote_id" }),
    __metadata("design:type", Array)
], Vote.prototype, "comments", void 0);
Vote = __decorate([
    (0, typeorm_1.Entity)('votes')
], Vote);
exports.default = Vote;
//# sourceMappingURL=vote.entity.js.map