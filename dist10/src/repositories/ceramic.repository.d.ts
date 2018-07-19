import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Ceramic } from '../models/ceramic.model';
export declare class CeramicRepository extends DefaultCrudRepository<Ceramic, typeof Ceramic.prototype.id> {
    protected datasource: juggler.DataSource;
    constructor(datasource: juggler.DataSource);
}
