import { Entity, property, model } from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    required: true,
    id: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;
}