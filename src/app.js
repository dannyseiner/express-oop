import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import { Socket } from 'socket.io';
import cors from "cors"

class App {
  constructor(port, socketport) {
    const app = this.expressApp = express();
    const socket = express();



    const server = require('http').createServer(socket);
    const io = require("socket.io")(server, {
      cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
      }
    });
    io.on('connection', () => {
      console.log("---------- SOCKET ----------")
      console.log("STATUS:", '\x1b[36mrunning\x1b[0m')
      console.log(`PORT:`, `\x1b[36m${socketport}\x1b[0m`)
    });

    server.listen(3011);


    app.disable('x-powered-by');
    app.use(logger('dev', {
      skip: () => app.get('env') === 'test'
    }));

    app.use(cors())
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
