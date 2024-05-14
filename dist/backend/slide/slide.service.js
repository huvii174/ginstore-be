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
exports.SlideService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const slide_entity_1 = require("../../entities/slide.entity");
let SlideService = class SlideService {
    async getLists(paging, filters) {
        let condition = {};
        if (filters.status)
            condition.s_status = filters.status;
        return await this.slideRepository.findAndCount({
            where: condition,
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
    async store(createSlideDto) {
        const newData = await this.slideRepository.create(createSlideDto);
        return await this.slideRepository.save(newData);
    }
    async show(id) {
        return await this.slideRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, updateSlideDto) {
        await this.slideRepository.update(id, updateSlideDto);
        return await this.show(id);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(slide_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], SlideService.prototype, "slideRepository", void 0);
SlideService = __decorate([
    (0, common_1.Injectable)()
], SlideService);
exports.SlideService = SlideService;
//# sourceMappingURL=slide.service.js.map