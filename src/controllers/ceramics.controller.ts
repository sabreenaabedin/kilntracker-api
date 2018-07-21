import { Request, RestBindings, get, HttpErrors, post, requestBody, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Ceramic } from '../models/ceramic.model';
import { repository } from '@loopback/repository';
import { CeramicRepository } from '../repositories/ceramic.repository';

export class CeramicsController {
  constructor(
    @repository(CeramicRepository.name) private ceramicRepo: CeramicRepository
  ) { }

  @get('/ceramics')
  async ceramics(): Promise<Array<Ceramic>> {
    return await this.ceramicRepo.find();
  }

  @post("/ceramics")
  async createCeramic(@requestBody() ceramic: Ceramic): Promise<Ceramic> {
    
    let createdCeramic = await this.ceramicRepo.create(ceramic);
    return createdCeramic;

  }

}
