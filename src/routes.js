import { Router } from 'express';

import UserController from './app/controllers/UserController.js';

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

export default routes;
