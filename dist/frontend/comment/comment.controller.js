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
exports.CommentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
const Paging_1 = require("../../common/response/Paging");
const ResponseData_1 = require("../../common/response/ResponseData");
const comment_service_1 = require("./comment.service");
const swagger_1 = require("@nestjs/swagger");
const CreateComment_dto_1 = require("./dto/CreateComment.dto");
const UpdateComment_dto_1 = require("./dto/UpdateComment.dto");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async getListsComments(req) {
        const { id, user } = req.user;
        const filters = {
            status: req.query.status || "",
            sort: req.query.sort || "",
            page: req.query.page || 1,
            page_size: req.query.page_size || 10,
        };
        const response = await this.commentService.getListsComments(id, filters);
        const [data, total] = response;
        const pagingData = new Paging_1.Paging(Number(filters.page), Number(filters.page_size), total);
        return new ResponseData_1.ResponseData(common_1.HttpStatus.OK, data, "success", pagingData);
    }
    async store(commentDto) {
        const data = await this.commentService.store(commentDto);
        return new ResponseData_1.ResponseData(200, data);
    }
    async show(id) {
        const data = await this.commentService.show(id);
        return new ResponseData_1.ResponseData(200, data);
    }
    async update(commentDto, id) {
        const response = await this.commentService.update(id, commentDto);
        return new ResponseData_1.ResponseData(200, response);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('lists'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getListsComments", null);
__decorate([
    (0, common_1.Post)('store'),
    openapi.ApiResponse({ status: 201, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateComment_dto_1.default]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "store", null);
__decorate([
    (0, common_1.Get)('show/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "show", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../common/response/ResponseData").ResponseData }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdateComment_dto_1.default, Number]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "update", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    (0, swagger_1.ApiTags)("Comment"),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map