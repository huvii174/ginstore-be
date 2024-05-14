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
const category_entity_1 = require("./category.entity");
const order_entity_1 = require("./order.entity");
const vote_entity_1 = require("./vote.entity");
let Product = class Product {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, pro_name: { required: true, type: () => String }, pro_slug: { required: true, type: () => String }, pro_avatar: { required: true, type: () => String }, pro_description: { required: true, type: () => String }, pro_content: { required: true, type: () => String }, pro_price: { required: true, type: () => Number }, pro_category_id: { required: true, type: () => Number }, pro_discount_type: { required: true, type: () => String }, pro_discount_value: { required: true, type: () => Number }, pro_number: { required: true, type: () => Number }, pro_active: { required: true, type: () => Number }, pro_sale: { required: true, type: () => Number }, pro_review_total: { required: true, type: () => Number }, pro_review_star: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, category: { required: true, type: () => require("./category.entity").default }, order: { required: true, type: () => require("./order.entity").default }, votes: { required: true, type: () => [require("./vote.entity").default] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_category_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "pro_discount_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_discount_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_active", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_sale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_review_total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "pro_review_star", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Product.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.default, (category) => category.products),
    (0, typeorm_1.JoinColumn)({ name: "pro_category_id", referencedColumnName: "id" }),
    __metadata("design:type", category_entity_1.default)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.default, (order) => order.products),
    (0, typeorm_1.JoinColumn)({ name: "id", referencedColumnName: "od_product_id" }),
    __metadata("design:type", order_entity_1.default)
], Product.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vote_entity_1.default, (vote) => vote.product),
    (0, typeorm_1.JoinColumn)({ name: "id", referencedColumnName: "v_product_id" }),
    __metadata("design:type", Array)
], Product.prototype, "votes", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('products')
], Product);
exports.default = Product;
//# sourceMappingURL=product.entity.js.map