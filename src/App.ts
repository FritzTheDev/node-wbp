import * as express from 'express';
import * as passport from 'passport';
import * as morgan from 'morgan';
import { Controller } from './interfaces/Controller.interface';
import { errorMiddleware } from './middleware/error.middleware';

export class App {
  public app: express.Application;
  constructor(controllers: Controller[]) {
    this.app = express();

    this.initializeMiddlewares();
    this.initializeRoutes(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`App Listening on port ${process.env.PORT}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(passport.initialize());
    this.app.use(morgan('common'));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeRoutes(controllers: Controller[]) {
    controllers.map(controller => {
      this.app.use(controller.router);
    });
  }
}
