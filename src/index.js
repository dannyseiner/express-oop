import App from './app';
import dotenv from 'dotenv';
dotenv.load();

const { PORT = 3010 } = process.env;

new App(PORT);
