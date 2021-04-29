"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSchema = void 0;
const mongoose = require("mongoose");
exports.ShopSchema = new mongoose.Schema({
    gamerName: String,
    gamerEmail: String,
    gamerCredit: Number,
    create_At: Date,
    status: Number,
});
//# sourceMappingURL=shop.schema.js.map