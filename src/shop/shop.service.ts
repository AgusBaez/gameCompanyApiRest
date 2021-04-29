import { Injectable } from '@nestjs/common';
import { Shop } from './interfaces/shop.interface';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShopService {
    constructor(@InjectModel('Shop')private readonly shopModel: Model<Shop>){}

    async find(id: string): Promise<Shop>{
        return await this.shopModel.findOne({ _id: id})
    }

    async create(shop: Shop): Promise<Shop>{
        const newShop = new this.shopModel(shop);
        return await newShop.save();
    }
    async update(id: string, shop: Shop): Promise<Shop>{
        return await this.shopModel.findByIdAndUpdate(id, shop, {  new: true  });
    }
    async delet(id: string): Promise<Shop>{
        return await this.shopModel.findByIdAndRemove(id);
    }
}
