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
class CreateVoteDto {
    constructor() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { v_content: { required: true, type: () => String }, v_number: { required: true, type: () => Number }, v_product_id: { required: true, type: () => Number }, v_user_id: { required: false, type: () => Number }, v_status: { required: false, type: () => Number }, created_at: { required: false, type: () => Date, default: new Date() }, updated_at: { required: false, type: () => Date, default: new Date() } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVoteDto.prototype, "v_content", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVoteDto.prototype, "v_number", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateVoteDto.prototype, "v_product_id", void 0);
exports.default = CreateVoteDto;
//# sourceMappingURL=CreateVote.dto.js.map