import { Entity } from '@loopback/repository';
export declare class Ceramic extends Entity {
    id?: number;
    name: string;
    description: string;
    photo: string;
    tracking: string;
    weight: number;
    height: number;
    glaze: string;
    getId(): number | undefined;
}
