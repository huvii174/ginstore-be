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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("../../entities/order.entity");
let OrderService = class OrderService {
    async store(orderDto) {
        const newData = await this.orderRepository.create(orderDto);
        return await this.orderRepository.save(newData);
    }
    async show(id) {
        return await this.orderRepository.findOne({
            where: { id }
        });
    }
    async findOrderByTransactionId(id, transaction_id) {
        return await this.orderRepository.findOne({
            where: { id: id, od_transaction_id: transaction_id }
        });
    }
    async update(id, orderDto) {
        return await this.orderRepository.update(id, orderDto);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(order_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], OrderService.prototype, "orderRepository", void 0);
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map