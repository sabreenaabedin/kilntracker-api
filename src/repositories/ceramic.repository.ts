import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { inject } from '@loopback/core';
import { Ceramic } from '../models/ceramic.model';

export class CeramicRepository extends DefaultCrudRepository<Ceramic, typeof Ceramic.prototype.id> {
    constructor(@inject('datasources.db') protected datasource: juggler.DataSource) {
        super(Ceramic, datasource);
    }
}