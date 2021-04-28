import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';

@Module({
  imports: [],
  controllers: [AppController, CrudController],
  providers: [AppService],
})
export class AppModule {}
