import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Crud } from "./interfaces/crud.interface";
import { CreateJugadorDTO } from "./dto/crud.dto";
import { CrudModule } from './crud.module';

@Injectable()
export class CrudService {
    crudModel: any;

    constructor(@InjectModel('Agus') crudModel: Model<Crud> ){}
            //Espero obtener el arreglo CRUD
    async getJugadores(): Promise<Crud[]>{
        const crud = await this.crudModel.find()
        return crud;
    }

    async getJugador(jugadorID: string): Promise<Crud> {
        const crud = await this.crudModel.findById(jugadorID);//CONSULTA DB
        return crud;
    }

    async createJugador(createJugadorDTO): Promise<Crud>  {
        const crud = new this.crudModel(createJugadorDTO);//Creo el objeto
        return await crud.save();//lo guardo y devuelvo
        
    }

    deletJugador(){
        
    }

    updateJugador(){

    }
}
