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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../entities/user.entity");
const md5 = require('md5');
let UserService = class UserService {
    async findOneByUsername(username) {
        return this.userRepository.findOne({
            where: {
                username: username
            }
        });
    }
    async register(userRegister) {
        const newData = await this.userRepository.create(userRegister);
        return await this.userRepository.save(newData);
    }
    async findById(id) {
        return await this.userRepository.findOne({
            where: {
                id: id
            }
        });
    }
    async updateInfo(id, updateUser) {
        await this.userRepository.update(id, updateUser);
        return await this.findById(id);
    }
    async updatePhone(id, updatePhone) {
        const user = await this.findById(id);
        const checkPhone = await this.userRepository.findOne({
            where: {
                phone: updatePhone.phone,
                id: (0, typeorm_2.Not)(id)
            }
        });
        if (checkPhone) {
            throw new common_1.HttpException(`Error update phone ${updatePhone.phone} user`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        user.phone = updatePhone.phone;
        await this.userRepository.update(id, user);
        return await this.findById(id);
    }
    async updateEmail(id, updateEmail) {
        const user = await this.findById(id);
        const checkEmail = await this.userRepository.findOne({
            where: {
                email: updateEmail.email,
                id: (0, typeorm_2.Not)(id)
            }
        });
        if (checkEmail) {
            throw new common_1.HttpException(`Error update email ${updateEmail.email} user`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        user.email = updateEmail.email;
        await this.userRepository.update(id, user);
        return await this.findById(id);
    }
    async updatePassword(id, updatePassword) {
        const user = await this.findById(id);
        return await this.findById(id);
    }
    async updateRefreshToken(user_id, refresh_token) {
        const hashedRefreshToken = md5(refresh_token);
        await this.userRepository.update(user_id, {
            refresh_token: hashedRefreshToken,
        });
    }
    async findOneByEmail(email) {
        return this.userRepository.findOne({
            where: {
                email: email
            }
        });
    }
    async findOneByPhone(phone) {
        return this.userRepository.findOne({
            where: {
                phone: phone
            }
        });
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(user_entity_1.default),
    __metadata("design:type", typeorm_2.Repository)
], UserService.prototype, "userRepository", void 0);
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map