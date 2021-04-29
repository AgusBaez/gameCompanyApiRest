import { ShopService } from "./shop.service";
import { Shop } from "./interfaces/shop.interface";
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    find(id: any): Promise<Shop>;
    create(): string;
    update(): string;
    delete(): string;
}
