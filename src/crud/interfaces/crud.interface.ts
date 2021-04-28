//interfaz detalla el codigo
import { Document } from "mongoose";
                                //Orientacion a:
export interface Crud extends Document{
    id: number;
    firstname: string;
    email: string;
    status: number;
    credit: string;
    createAt: Date;
}
