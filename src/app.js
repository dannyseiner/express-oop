import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';

// Active to connect redis
// import RedisConn from './lib/connection';

class App {
  constructor(port) {
    const app = this.expressApp = express();

    app.disable('x-powered-by');
    app.use(logger('dev', {
      skip: () => app.get('env') === 'test'
    }));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    this.setRoutes();
    //this.errorHandling(); -> view engine error handler

    app.listen(port, () => {
      console.log("---------- SERVER ----------")
      console.log("STATUS:", '\x1b[36mrunning\x1b[0m')
      console.log(`PORT:`, `\x1b[36m${port}\x1b[0m`)
      console.log(`\x1b[36mhttp://localhost:${port}\x1b[0m`)
      console.log("--------- ACTIVITY ----------")

    }); // eslint-disable-line
  }

  setRoutes() {
    // Routes
    this.expressApp.use('/', routes);
  }

  errorHandling() {
    // Catch 404 and forward to error handler
    this.expressApp.use((req, res, next) => {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });
    // Error handler
    this.expressApp.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
      res
        .status(err.status || 500)
        .render('error', {
          message: err.message
        });
    });
  }
}

export default App;
