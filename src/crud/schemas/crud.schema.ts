//esquema para definir los datos que voy a guardar en mongo db
import { Schema } from "mongoose"

export const CrudSchema = new Schema({
    id: {type:Number, required: true},
    name: String,
    email: {type:String, required: true },
    status: Number,
    credit: String,
    createAt: {
        type: Date,
        default: Date.now,
    }
});
