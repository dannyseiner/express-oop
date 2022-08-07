import { Router } from 'express';
import Main from './controllers/Main';
import { getUser, getAllUsers, getUserName } from "./controllers/User"
const routes = Router();




routes.get('/', Main);
routes.get("/test", getUser)
routes.get('/users', getAllUsers)
routes.get('/:username', getUserName)
export default routes;
