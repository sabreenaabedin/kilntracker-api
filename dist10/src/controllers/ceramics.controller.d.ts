import { Ceramic } from '../models/ceramic.model';
import { CeramicRepository } from '../repositories/ceramic.repository';
export declare class CeramicsController {
    private ceramicRepo;
    constructor(ceramicRepo: CeramicRepository);
    ceramics(): Promise<Array<Ceramic>>;
    createCeramic(ceramic: Ceramic): Promise<Ceramic>;
}
