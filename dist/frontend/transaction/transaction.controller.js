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
exports.TransactionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CreateTransaction_dto_1 = require("./dto/CreateTransaction.dto");
const transaction_service_1 = require("./transaction.service");
const ResponseData_1 = require("../../common/response/ResponseData");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const Paging_1 = require("../../common/response/Paging");
const UpdateTransaction_dto_1 = require("./dto/UpdateTransaction.dto");
const nestjs_real_ip_1 = require("nestjs-real-ip");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async getListsTransaction(req) {
        const paging = {
            page: req.query.page || 1,
            page_size: req.query.page_size || 10,
        };
        console.log('----------- req.user: ', req.user);
        const user = req.user;
        const filters = {
            hot: req.query.hot || "",
            status: req.query.status || "",
            sort: req.query.sort || "",
            category_id: req.query.category_id || "",
            user_id: user.id
        };
        const response = await this.transactionService.getListsTransaction(paging, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(paging.page), Number(paging.page_size), total);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data, "success", pagingData);
    }
    async create(formData, req, ip) {
        try {
            const user = req.user;
            let userID = (user && user.id) ? user.id : 0;
            const data = await this.transactionService.create(formData, parseInt(userID), ip);
            const [transaction, link] = data;
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, {
                'transaction': transaction,
                'link': link
            }, 'success');
        }
        catch (e) {
            console.log('----------ERROR: TransactionController@create => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
    async getLinkTTOnline(formData, req, ip) {
        try {
            let data = {
                t_total_money: formData.money,
                id: Math.floor(Math.random() * 1000000),
                url_callback: formData.url_callback
            };
            const response = await this.transactionService.getLinkPaymentVnpay(data);
            if (response.status && response.status == 'success') {
                return response.data.link_payment;
            }
        }
        catch (e) {
            console.log('----------ERROR: getLinkTTOnline@create => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
    async update(formData, req, id) {
        const user = req.user;
        const data = await this.transactionService.update(formData, parseInt(user.id), id);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async delete(req, id) {
        const user = req.user;
        const data = await this.transactionService.deleteTransaction(parseInt(user.id), id);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
    }
    async show(id) {
        try {
            const data = await this.transactionService.show(id);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
        }
        catch (e) {
            console.log('----------ERROR: TransactionController@show => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
    async getConfig() {
        try {
            const data = {
                "status": [
                    {
                        'value': 1,
                        'name': 'Khởi tạo'
                    },
                    {
                        'value': 2,
                        'name': 'Chờ xử lý'
                    },
                    {
                        'value': 3,
                        'name': 'Chờ lấy hàng'
                    },
                ]
            };
            return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data);
        }
        catch (e) {
            console.log('----------ERROR: TransactionController@getConfig => ', e);
            return new ResponseData_1.ResponseData(common_1.HttpStatus.INTERNAL_SERVER_ERROR, e.response, 'error');
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getListsTransaction", null);
__decorate([
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, nestjs_real_ip_1.RealIP)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTransaction_dto_1.default, Object, String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('gen-link-tt-online'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, nestjs_real_ip_1.RealIP)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getLinkTTOnline", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateTransaction_dto_1.default, Object, Number]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "show", null);
__decorate([
    (0, common_1.Get)('config'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getConfig", null);
TransactionController = __decorate([
    (0, common_1.Controller)('transaction'),
    (0, swagger_1.ApiTags)('Transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map