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
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const menu_entity_1 = require("../../entities/menu.entity");
const Function_1 = require("../../common/helpers/Function");
let MenuService = class MenuService {
    async getListsMenus(paging, filters) {
        let condition = {};
        if (filters.hot)
            condition.mn_hot = filters.hot;
        if (filters.status)
            condition.mn_status = filters.status;
        return await this.menuRepository.findAndCount({
            where: condition,
            take: paging.page_size,
            skip: (paging.page - 1) * paging.page_size
        });
    }
    async store(menuDto) {
        menuDto.mn_slug = (0, Function_1.toSlug)(menuDto.mn_name);
        const newData = await this.menuRepository.create(menuDto);
        return await this.menuRepository.save(newData);
    }
    async show(id) {
        return await this.menuRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async update(id, menuDto) {
        menuDto.mn_slug = (0, Function_1.toSlug)(menuDto.mn_name);
        await this.menuRepository.update(id, menuDto);
        return await this.show(id);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(menu_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], MenuService.prototype, "menuRepository", void 0);
MenuService = __decorate([
    (0, common_1.Injectable)()
], MenuService);
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map