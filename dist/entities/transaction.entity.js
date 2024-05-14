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
const order_entity_1 = require("./order.entity");
let Transaction = class Transaction {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, t_note: { required: true, type: () => String }, t_name: { required: true, type: () => String }, t_phone: { required: true, type: () => String }, t_user_id: { required: true, type: () => Number }, t_total_money: { required: true, type: () => Number }, t_total_discount: { required: true, type: () => Number }, t_status: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, orders: { required: true, type: () => [require("./order.entity").default] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaction.prototype, "t_note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaction.prototype, "t_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Transaction.prototype, "t_phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "t_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "t_total_money", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "t_total_discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Transaction.prototype, "t_status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Transaction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.default, (order) => order.transaction),
    (0, typeorm_1.JoinColumn)({ name: "id", referencedColumnName: "od_transaction_id" }),
    __metadata("design:type", Array)
], Transaction.prototype, "orders", void 0);
Transaction = __decorate([
    (0, typeorm_1.Entity)('transactions')
], Transaction);
exports.default = Transaction;
//# sourceMappingURL=transaction.entity.js.map