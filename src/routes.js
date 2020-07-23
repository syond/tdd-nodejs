import { Router } from 'express';

import UserController from './app/controllers/UserController.js';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.patch('/users/:id', UserController.update);

export default routes;
