import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CrudSchema } from "./schemas/crud.schema";
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Agus', schema: CrudSchema}
    ])
  ],
  providers: [CrudService]
})
export class CrudModule {}
