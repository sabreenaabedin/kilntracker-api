import { Request, RestBindings, get, HttpErrors, post, requestBody, param } from '@loopback/rest';
import { inject } from '@loopback/context';
import { Ceramic } from '../models/ceramic.model';
import { repository } from '@loopback/repository';
import { CeramicRepository } from '../repositories/ceramic.repository';
import { sign, verify } from 'jsonwebtoken';

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

  @get('/ceramics/{jwt}')
  async ceramicsByUser(@param.path.string('jwt') jwt: string): Promise<Array<Ceramic>> {
    
   var requestedEmail: string = "";
   // get user
   try {
    let payload = verify(jwt, 'secretKey') as any;
    requestedEmail = payload.user.email;
  } catch (err) {
    throw new HttpErrors.Unauthorized('Invalid token');
  }

    return await this.ceramicRepo.find({
      where:
      { useremail: requestedEmail}
    });
  }

}
