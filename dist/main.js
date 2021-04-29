"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Gamers')
        .setDescription('A company game')
        .setVersion('0.0.1')
        .addTag('gamers')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        explorer: true,
        swaggerOptions: {
            filter: true,
            showRequestDurartion: true,
        }
    });
    swagger_1.SwaggerModule.setup('shop/docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map