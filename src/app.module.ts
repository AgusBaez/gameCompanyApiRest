import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopController } from './shop/shop.controller';
import { ShopService } from './shop/shop.service';

@Module({
  imports: [],
  controllers: [AppController, ShopController],
  providers: [AppService, ShopService],
})
export class AppModule {}
