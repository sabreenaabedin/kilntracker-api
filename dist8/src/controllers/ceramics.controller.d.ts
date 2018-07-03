/// <reference types="express" />
import { Request } from '@loopback/rest';
export declare class CeramicsController {
    private req;
    constructor(req: Request);
    ceramics(): Array<any>;
}
