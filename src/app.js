import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from "cors"

class App {
  constructor(port) {
    const app = this.expressApp = express();
    app.disable('x-powered-by');
    app.use(logger('dev', {
      skip: () => app.get('env') === 'test'
    }));

    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('json spaces', 2)


    this.setRoutes();
    //this.errorHandling(); -> view engine error handler

    app.listen(port, () => {
      console.log("---------- SERVER ----------")
      console.log("STATUS:", '\x1b[36mrunning\x1b[0m')
      console.log(`PORT:`, `\x1b[36m${port}\x1b[0m`)
      console.log(`\x1b[36mhttp://localhost:${port}\x1b[0m`)
      console.log("--------- ACTIVITY ----------")

    });
  }

  setRoutes() {
    this.expressApp.use('/', routes);
  }

  errorHandling() {
    this.expressApp.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    this.expressApp.use((err, req, res, next) => {
      res
        .status(err.status || 500)
        .render('error', {
          message: err.message
        });
    });
  }
}

export default App;
