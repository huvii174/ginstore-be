"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogApiModule = void 0;
const common_1 = require("@nestjs/common");
const log_api_controller_1 = require("./log-api.controller");
const log_api_service_1 = require("./log-api.service");
const typeorm_1 = require("@nestjs/typeorm");
const log_api_entity_1 = require("../../entities/log_api.entity");
let LogApiModule = class LogApiModule {
};
LogApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                log_api_entity_1.default
            ]),
        ],
        controllers: [log_api_controller_1.LogApiController],
        providers: [log_api_service_1.LogApiService]
    })
], LogApiModule);
exports.LogApiModule = LogApiModule;
//# sourceMappingURL=log-api.module.js.map