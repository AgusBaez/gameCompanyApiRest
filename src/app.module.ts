import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudController } from './crud/crud.controller';
import { CrudModule } from './crud/crud.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
  CrudModule,
  MongooseModule.forRoot('mongodb://localhost/gameCompany')],
  controllers: [AppController, CrudController],
  providers: [AppService],
})
export class AppModule {}
