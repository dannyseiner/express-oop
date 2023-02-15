import { Router } from 'express';
import { Main, PostTest } from './controllers/main';
import { getPosts } from "./controllers/posts"
const routes = Router();
routes.get('/', (req, res) => Main(req, res, routes));

routes.get('/posts', getPosts)
routes.get('/posts/:uuid', getPosts)
routes.post('/test', PostTest)

export default routes;
