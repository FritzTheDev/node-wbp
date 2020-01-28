import * as express from 'express';
import * as passport from 'passport';
import { Controller } from './interfaces/Controller.interface';

export class App {
  public app: express.Application;
  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeMiddlewares();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App Listening on port ${process.env.PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(passport.initialize());
  }
}
