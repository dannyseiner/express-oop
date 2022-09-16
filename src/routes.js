import { Router } from 'express';
import { Main, PostTest } from './controllers/main';
import { getAllUsers, getUserName } from "./controllers/user"
const routes = Router();

routes.get('/', Main);
routes.get('/users', getAllUsers)
routes.post('/test', PostTest)
routes.get('/:username', getUserName)

export default routes;
