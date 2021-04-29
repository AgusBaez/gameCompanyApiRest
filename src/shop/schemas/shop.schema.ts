import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
    gamerName: String,
    gamerEmail: String,
    gamerCredit: Number,
    create_At: Date,
    status: Number,
});