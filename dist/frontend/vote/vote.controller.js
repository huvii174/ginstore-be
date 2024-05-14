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
exports.VoteController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const ResponseData_1 = require("../../common/response/ResponseData");
const swagger_1 = require("@nestjs/swagger");
const vote_service_1 = require("./vote.service");
const Paging_1 = require("../../common/response/Paging");
const CreateVote_dto_1 = require("./dto/CreateVote.dto");
const UpdateVote_dto_1 = require("./dto/UpdateVote.dto");
let VoteController = class VoteController {
    constructor(voteService) {
        this.voteService = voteService;
    }
    async getListsVote(req) {
        const filters = {
            status: req.query.status || "",
            sort: req.query.sort || "",
            page: req.query.page || 1,
            product_id: req.query.product_id || "",
            number: req.query.number || "",
            page_size: req.query.page_size || 10,
        };
        const response = await this.voteService.getListsVote(filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(filters.page), Number(filters.page_size), total);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data, "success", pagingData);
    }
    async store(voteDto, req) {
        const { id, user } = req.user;
        voteDto.v_user_id = id;
        const data = await this.voteService.store(voteDto);
        return new ResponseData_1.ResponseData(200, data);
    }
    async show(id) {
        const data = await this.voteService.show(id);
        return new ResponseData_1.ResponseData(200, data);
    }
    async update(voteDto, id, req) {
        const { user_id, user } = req.user;
        voteDto.v_user_id = id;
        const response = await this.voteService.update(id, voteDto);
        return new ResponseData_1.ResponseData(200, response);
    }
    async delete(voteDto, id, req) {
        const { user_id, user } = req.user;
        const response = await this.voteService.delete(id, parseInt(user_id));
        return new ResponseData_1.ResponseData(200, response);
    }
};
__decorate([
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "getListsVote", null);
__decorate([
    (0, common_1.Post)('store'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateVote_dto_1.default, Object]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "store", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "show", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateVote_dto_1.default, Number, Object]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateVote_dto_1.default, Number, Object]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "delete", null);
VoteController = __decorate([
    (0, common_1.Controller)('vote'),
    (0, swagger_1.ApiTags)("Vote"),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteController);
exports.VoteController = VoteController;
//# sourceMappingURL=vote.controller.js.map