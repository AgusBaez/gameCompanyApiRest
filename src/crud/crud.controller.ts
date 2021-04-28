import { Controller, Get } from '@nestjs/common';

@Controller('crud')
export class CrudController {

    @Get()
    getCud(){
        return 'Devolviedo CRUD';
    } 
    

}
