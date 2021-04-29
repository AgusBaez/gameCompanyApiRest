import { Document } from "mongoose";
export interface Shop extends Document {
    id?: string;
    gamerName: string;
    gamerEmail: string;
    gamerCredit: number;
    create_At: Date;
    status: number;
}
