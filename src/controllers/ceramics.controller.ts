import {Request, RestBindings} from '@loopback/rest';
import {get} from '@loopback/openapi-v3';
import {inject} from '@loopback/context';

export class CeramicsController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/ceramics')
  ceramics(): Array<any> {
    var ceramics = new Array<any>();
    
    return ceramics;
  }
}
