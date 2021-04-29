import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    all(): string;
    new(): string;
    update(): string;
    delete(): string;
}
