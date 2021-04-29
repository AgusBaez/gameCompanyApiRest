import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const options = new DocumentBuilder()
    .setTitle('Gamers')
    .setDescription('A company game')
    .setVersion('0.0.1')
    .addTag('gamers')
    .build();
    
    const document = SwaggerModule.createDocument(app, options);
    
    SwaggerModule.setup('api/docs', app, document, {
      explorer:true,
    swaggerOptions:{
        filter: true,
        showRequestDurartion: true,
    }});
    SwaggerModule.setup('shop/docs', app, document);
  await app.listen(3000);
}
bootstrap();
