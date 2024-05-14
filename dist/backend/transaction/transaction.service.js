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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../../frontend/product/product.service");
const order_service_1 = require("../../frontend/order/order.service");
let TransactionService = class TransactionService {
    constructor(productService, orderService) {
        this.productService = productService;
        this.orderService = orderService;
        this.logger = new common_1.Logger('TransactionService');
    }
    async getListsTransaction(paging, filters) {
        let condition = {};
        if (filters.status)
            condition.t_status = filters.status;
        if (filters.user_id)
            condition.t_user_id = filters.user_id;
        let order = { id: "DESC" };
        console.log('------------- filters: ', filters);
        return await this.transactionRepository.findAndCount({
            where: condition,
            order: order,
            relations: {
                orders: {
                    products: true
                }
            },
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        order_service_1.OrderService])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map