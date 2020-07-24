import { Router } from 'express';

import UserController from './app/controllers/UserController.js';

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:id', UserController.show);
routes.patch('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

export default routes;
