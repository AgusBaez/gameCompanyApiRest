import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ShopService } from "./shop.service";
@Controller('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService){
        
    }
    @Get()//obtiene
    findAll(): string{
        return "findAll"
    }

    @Post()//crea
    new(): string {
        return "New"
    }

    @Put()//Actualiza
    update(): string {
        return "Update"
    }

    @Delete()//Elimina
    delete(): string {
        return "Deleted"
    }
}
