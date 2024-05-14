"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const exceptionsLogger_filter_1 = require("./utils/exceptionsLogger.filter");
async function bootstrap() {
    var _a;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('API with NestJS')
        .setDescription('API developed throughout the API with NestJS course')
        .setVersion('1.0')
        .build();
    app.setGlobalPrefix('api');
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new exceptionsLogger_filter_1.ExceptionsLoggerFilter(httpAdapter));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const port = (_a = configService.get('PORT')) !== null && _a !== void 0 ? _a : 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map