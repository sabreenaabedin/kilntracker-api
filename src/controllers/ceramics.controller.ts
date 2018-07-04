import {Request, RestBindings, get, HttpErrors, post, requestBody, param} from '@loopback/rest';
import {inject} from '@loopback/context';
import { Ceramic } from '../models/ceramic.model';
import { repository } from '@loopback/repository';
import { CeramicRepository } from '../repositories/ceramic.repository';

export class CeramicsController {
  constructor(
    @repository(CeramicRepository.name) private ceramicRepo: CeramicRepository
  ) {}

  @get('/ceramics')
  ceramics(): Array<Ceramic> {
    var ceramics = new Array<Ceramic>();

    ceramic1: Ceramic;
    // ceramic1.name = 1;

    
    return ceramics;
  }


  // @get("/ceramics/{ceramicId}")
  // getSpecificPizza(@param.path.string("pizzaId") pizzaId: string
  // ): any {
  //   if (pizzaId == "1") {
  //     return "ABC";
  //   }


  //   throw new HttpErrors.NotFound("Sorry, item not found");
  // }

  @post("/ceramics")
  async createPizza(@requestBody() ceramic: Ceramic): Promise<Ceramic> {
    
    let createdCeramic = await this.ceramicRepo.create(ceramic);
    return createdCeramic;

  }

}
