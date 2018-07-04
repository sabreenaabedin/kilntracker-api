import { Ceramic } from '../models/ceramic.model';
import { CeramicRepository } from '../repositories/ceramic.repository';
export declare class CeramicsController {
    private ceramicRepo;
    constructor(ceramicRepo: CeramicRepository);
    ceramics(): Array<Ceramic>;
    createPizza(ceramic: Ceramic): Promise<Ceramic>;
}
