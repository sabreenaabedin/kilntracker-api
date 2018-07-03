import { Entity, property, model } from '@loopback/repository';

@model()
export class Ceramic extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name: string;


  getId() {
    return this.id;
  }
}