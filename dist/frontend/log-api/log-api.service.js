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
exports.LogApiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const log_api_entity_1 = require("../../entities/log_api.entity");
let LogApiService = class LogApiService {
    async store(formData) {
        console.log('---------- data: ', formData);
        formData.created_at = new Date();
        console.log('---------- data: ', formData);
        const newData = await this.logApiRepository.create(formData);
        return await this.logApiRepository.save(newData);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(log_api_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], LogApiService.prototype, "logApiRepository", void 0);
LogApiService = __decorate([
    (0, common_1.Injectable)()
], LogApiService);
exports.LogApiService = LogApiService;
//# sourceMappingURL=log-api.service.js.map