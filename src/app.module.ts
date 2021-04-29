import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from "./shop/shop.module";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [ShopModule, MongooseModule.forRoot('mongodb://localhost:27017/shop')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
