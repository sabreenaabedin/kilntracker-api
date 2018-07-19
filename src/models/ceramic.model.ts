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

  @property({
    type: 'string',
  })
  description: string;

  @property({
    type: 'string',
  })
  photo: string;

  @property({
    type: 'string',
  })
  tracking: string;

  @property({
    type: 'number',
  })
  weight: number;

  @property({
    type: 'number',
  })
  height: number;

  @property({
    type: 'string',
  })
  glaze: string;

  getId() {
    return this.id;
  }
}