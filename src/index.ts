import {KilntrackerApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {KilntrackerApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new KilntrackerApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
