import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ShopService } from "./shop.service";
import { ShopDTO } from './dtos/shop.dto';
import { Shop } from "./interfaces/shop.interface";
@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService){
        
    }
    @Get(':id')//obtiene mediante la id
    find(@Param('id')id): Promise<Shop>{
        return this.shopService.find(id);
    }

    @Post()//crea
    create(): string {
        return "New"
    }

    @Put(':id')//Actualiza
    update(): string {
        return "Update"
    }

    @Delete(':id')//Elimina
    delete(): string {
        return "Deleted"
    }
}
