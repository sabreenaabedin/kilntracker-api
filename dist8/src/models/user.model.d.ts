import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}
