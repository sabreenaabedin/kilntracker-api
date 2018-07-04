import { ApplicationConfig } from '@loopback/core';
import { RestApplication, RestServer, RestBindings } from '@loopback/rest';
import { MySequence } from './sequence';
import { BootMixin, Booter, Binding } from '@loopback/boot';
import {
  Class,
  Repository,
  RepositoryMixin,
  juggler,
} from '@loopback/repository';

export class KilntrackerApiApplication extends BootMixin(
  RepositoryMixin(RestApplication)
) {
  constructor(options?: ApplicationConfig) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    this.projectRoot = __dirname;
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    var dataSourceConfig = new juggler.DataSource({
      name: "db",
      connector: "memory"
    });
    this.dataSource(dataSourceConfig);
  }
  async start() {
    await super.start();
  
    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
  }
}
