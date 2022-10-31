import { Router } from 'express';
import { Main, PostTest } from './controllers/main';
import { getPosts } from "./controllers/posts"
const routes = Router();
const socketRoutes = []

routes.get('/', Main);
routes.get('/posts', getPosts)
routes.post('/test', PostTest)

socketRoutes.push('/posts', (socket) => {
    console.log(client)
})

export default routes;
