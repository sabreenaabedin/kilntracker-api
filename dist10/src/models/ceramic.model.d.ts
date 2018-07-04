import { Entity } from '@loopback/repository';
export declare class Ceramic extends Entity {
    id?: number;
    name: string;
    getId(): number | undefined;
}
