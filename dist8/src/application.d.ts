import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { Booter, Binding } from '@loopback/boot';
declare const KilntrackerApiApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("../node_modules/@loopback/boot/dist8/src/interfaces").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<Booter>[]): Binding<any>[];
    component(component: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("../node_modules/@loopback/context/dist8/src/value-promise").Constructor<{}>): void;
}) & typeof RestApplication;
export declare class KilntrackerApiApplication extends KilntrackerApiApplication_base {
    constructor(options?: ApplicationConfig);
    start(): Promise<void>;
}
export {};