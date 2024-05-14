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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("../../entities/transaction.entity");
const product_service_1 = require("../product/product.service");
const StoreTransaction_dto_1 = require("./dto/StoreTransaction.dto");
const CreateOrder_dto_1 = require("../order/dto/CreateOrder.dto");
const order_service_1 = require("../order/order.service");
const UpdateOrder_dto_1 = require("../order/dto/UpdateOrder.dto");
const moment = require("moment");
const querystring = require("querystring");
var sortObj = require('sort-object');
const ip = require("ip");
const serviceCore_1 = require("../../curl/serviceCore");
let TransactionService = class TransactionService {
    constructor(productService, orderService, serviceCore) {
        this.productService = productService;
        this.orderService = orderService;
        this.serviceCore = serviceCore;
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
    async create(transactionDto, userID, ip) {
        let products = transactionDto.products;
        let total_price = 0;
        let total_discount = 0;
        if (products.length == 0) {
            throw new common_1.HttpException(`Không có sản phẩm nào trong giỏ hàng`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        for (let i = 0; i < products.length; i++) {
            let item = products[i];
            let product = await this.productService.show(item.id);
            if (!product) {
                throw new common_1.HttpException(`Sản phẩm có mã ${item.id} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            total_price += item.total_price * item.quantity;
        }
        let newTransaction = new StoreTransaction_dto_1.default();
        newTransaction.t_total_money = total_price;
        newTransaction.t_total_discount = total_discount;
        newTransaction.t_user_id = userID;
        newTransaction.t_name = transactionDto.name;
        newTransaction.t_phone = transactionDto.phone;
        newTransaction.t_note = transactionDto.note;
        newTransaction.t_type = transactionDto.t_type;
        newTransaction.created_at = new Date();
        console.log('------------ newTransaction: ', newTransaction);
        const transaction = await this.storeTransaction(newTransaction);
        if (transaction) {
            for (let i = 0; i < products.length; i++) {
                let item = products[i];
                let orderDto = new CreateOrder_dto_1.default();
                orderDto.od_discount_type = item.discount_type;
                orderDto.od_discount_value = item.discount_value;
                orderDto.od_price = item.price;
                orderDto.od_total_price = item.total_price;
                orderDto.od_product_id = item.id;
                orderDto.od_transaction_id = transaction.id;
                orderDto.od_qty = item.quantity;
                await this.orderService.store(orderDto);
            }
        }
        if (transactionDto.t_type == 2) {
            return [transaction, null];
        }
        let link = await this.storeVnPay(transaction);
        let linkPayment = await this.getLinkPaymentVnpay(transaction);
        console.log('--------------------linkPayment; ', linkPayment);
        if (linkPayment.status && linkPayment.status == 'success') {
            return [transaction, linkPayment.data.link_payment];
        }
    }
    async getLinkPaymentVnpay(transaction) {
        console.log('------------transaction: ', transaction);
        let data = {
            "total": transaction.t_total_money,
            "transaction_id": transaction.id,
            "url_callback": transaction.url_callback || "https://123code.net"
        };
        console.log('------------- getLinkPaymentVnpay@data: ', data);
        return await this.serviceCore.getLinkPaymentVnpay(data);
    }
    async storeVnPay(transaction) {
        var tmnCode = '3RDGQAX3';
        var secretKey = 'PMSBQTYJIQLJILQTWHKAESOMMTXYHFHE';
        var returnUrl = 'http://reactjs.123code.net';
        var vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
        var date = new Date();
        let createDate = moment(date).format("YYYYMMDDHHmmss");
        let expireDate = moment(date).add(20, 'minutes').format("YYYYMMDDHHmmss");
        let orderId = transaction.id;
        let amount = transaction.t_total_money;
        let currCode = 'VND';
        let vnp_Params = {};
        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_CreateDate'] = createDate;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_IpAddr'] = ip.address();
        vnp_Params['vnp_Locale'] = 'vn';
        vnp_Params['vnp_OrderInfo'] = 'ttonline';
        vnp_Params['vnp_OrderType'] = 'other';
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_ExpireDate'] = expireDate;
        vnp_Params = sortObj(vnp_Params);
        console.log('-------------- vnp_Params: ', vnp_Params);
        let signData = '?' + querystring.stringify(vnp_Params, null, null);
        const crypto = require('crypto');
        let hash = crypto.createHmac('sha512', secretKey).update(signData).digest('hex');
        console.log('---------------- hash: => ', hash);
        vnp_Params['vnp_SecureHash'] = hash;
        console.log('===================== vnp_Params', vnp_Params);
        vnpUrl += '?' + querystring.stringify(vnp_Params, null, null);
        console.log('================== vnpUrl: ', vnpUrl);
        return vnpUrl;
    }
    async storeTransaction(transactionDto) {
        const newData = await this.transactionRepository.create(transactionDto);
        return await this.transactionRepository.save(newData);
    }
    async update(transactionDto, userID, id) {
        let products = transactionDto.products;
        let total_price = 0;
        let total_discount = 0;
        for (let i = 0; i < products.length; i++) {
            let item = products[i];
            let product = await this.productService.show(item.id);
            if (!product) {
                throw new common_1.HttpException(`Sản phẩm có mã ${item.id} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            if (!item.order_id) {
                throw new common_1.HttpException(`Chi tiết đơn hàng không được để trống`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            let order = await this.orderService.findOrderByTransactionId(item.order_id, id);
            if (!order) {
                throw new common_1.HttpException(` Chi tiết đơn hàng có mã ${item.order_id} không tồn tại`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            total_price += item.total_price;
        }
        const transactionUpdate = await this.findById(id);
        transactionUpdate.t_total_money = total_price;
        transactionUpdate.t_total_discount = total_discount;
        transactionUpdate.t_note = transactionDto.note;
        await this.transactionRepository.update(id, transactionUpdate);
        for (let i = 0; i < products.length; i++) {
            let item = products[i];
            let orderDto = new UpdateOrder_dto_1.default();
            orderDto.od_discount_type = item.discount_type;
            orderDto.od_discount_value = item.discount_value;
            orderDto.od_price = item.price;
            orderDto.od_total_price = item.total_price;
            orderDto.od_product_id = item.id;
            orderDto.od_transaction_id = id;
            orderDto.od_qty = item.quantity;
            await this.orderService.update(item.order_id, orderDto);
        }
        return await this.findById(id);
    }
    async findById(id) {
        return await this.transactionRepository.findOne({
            where: { id }
        });
    }
    async deleteTransaction(user_id, id) {
        await this.transactionRepository.delete(id);
    }
    async show(id) {
        return await this.transactionRepository.findOne({
            where: { id },
            relations: {
                orders: true
            },
        });
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(transaction_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], TransactionService.prototype, "transactionRepository", void 0);
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(serviceCore_1.ServiceCore)),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        order_service_1.OrderService,
        serviceCore_1.ServiceCore])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map