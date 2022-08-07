import App from './app';
import dotenv from 'dotenv';
// Load env var
dotenv.load();

// Set port
const { PORT = 3010 } = process.env;

// express listen to port
new App(PORT);
