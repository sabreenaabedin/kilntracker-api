import {Request, RestBindings} from '@loopback/rest';
import {get} from '@loopback/openapi-v3';
import {inject} from '@loopback/context';
import { Ceramic } from '../models/ceramic.model';

export class CeramicsController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/ceramics')
  ceramics(): Array<Ceramic> {
    var ceramics = new Array<Ceramic>();
    
    return ceramics;
  }
}
