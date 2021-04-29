import { Injectable } from '@nestjs/common';
import { Shop } from './interfaces/shop.interface';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShopService {
    constructor(@InjectModel('Shop')private readonly shopsModel: Model<Shop>){}
}
