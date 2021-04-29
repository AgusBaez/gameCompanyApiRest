"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ShopService = class ShopService {
    constructor(shopModel) {
        this.shopModel = shopModel;
    }
    async find(id) {
        return await this.shopModel.findOne({ _id: id });
    }
    async create(shop) {
        const newShop = new this.shopModel(shop);
        return await newShop.save();
    }
    async update(id, shop) {
        return await this.shopModel.findByIdAndUpdate(id, shop, { new: true });
    }
    async delet(id) {
        return await this.shopModel.findByIdAndRemove(id);
    }
};
ShopService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Shop')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map