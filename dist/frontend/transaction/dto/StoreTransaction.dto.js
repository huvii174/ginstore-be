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
const class_validator_1 = require("class-validator");
class StoreTransactionDto {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { t_note: { required: true, type: () => String }, t_name: { required: true, type: () => String }, t_phone: { required: true, type: () => String }, t_total_money: { required: true, type: () => Number }, t_user_id: { required: true, type: () => Number }, t_type: { required: true, type: () => Number }, t_total_discount: { required: true, type: () => Number }, created_at: { required: false, type: () => Date, default: new Date() }, updated_at: { required: false, type: () => Date, default: new Date() } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreTransactionDto.prototype, "t_note", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreTransactionDto.prototype, "t_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], StoreTransactionDto.prototype, "t_phone", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreTransactionDto.prototype, "t_total_money", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreTransactionDto.prototype, "t_user_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], StoreTransactionDto.prototype, "t_type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], StoreTransactionDto.prototype, "t_total_discount", void 0);
exports.default = StoreTransactionDto;
//# sourceMappingURL=StoreTransaction.dto.js.map