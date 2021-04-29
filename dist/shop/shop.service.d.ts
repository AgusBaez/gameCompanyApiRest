import { Shop } from './interfaces/shop.interface';
import { Model } from "mongoose";
export declare class ShopService {
    private readonly shopModel;
    constructor(shopModel: Model<Shop>);
    find(id: string): Promise<Shop>;
    create(shop: Shop): Promise<Shop>;
    update(id: string, shop: Shop): Promise<Shop>;
    delet(id: string): Promise<Shop>;
}
