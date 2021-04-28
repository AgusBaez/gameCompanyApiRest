import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import{ CreateJugadorDTO } from './dto/crud.dto'
@Controller('crud')
export class CrudController {

@Post('/estado')                                    //clase instanciada
    createCRUD(@Res() res, @Body()createJugadorDTO: CreateJugadorDTO){
        //console.log(CreateJugadorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'recibido'
        })

    }

}
