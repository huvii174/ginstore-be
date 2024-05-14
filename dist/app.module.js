"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const backend_module_1 = require("./backend/backend.module");
const frontend_module_1 = require("./frontend/frontend.module");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const upload_module_1 = require("./upload/upload.module");
const Joi = require("@hapi/joi");
const exceptionsLogger_filter_1 = require("./utils/exceptionsLogger.filter");
const core_1 = require("@nestjs/core");
const payment_module_1 = require("./payment/payment.module");
const axios_1 = require("@nestjs/axios");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule.registerAsync({
                useFactory: async () => ({
                    timeout: 120000,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }),
            }),
            backend_module_1.BackendModule,
            frontend_module_1.FrontendModule,
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    MYSQL_HOST: Joi.string().required(),
                    MYSQL_PORT: Joi.number().required(),
                    MYSQL_USER: Joi.string().required(),
                    MYSQL_PASSWORD: Joi.string().required(),
                    MYSQL_DB: Joi.string().required(),
                    PORT: Joi.number(),
                    UPLOADED_FILES_DESTINATION: Joi.string().required()
                }),
            }),
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
            payment_module_1.PaymentModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: exceptionsLogger_filter_1.ExceptionsLoggerFilter,
            },
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map