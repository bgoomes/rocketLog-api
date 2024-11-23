import { Router } from 'express';
import { userRoutes } from './user-routes';
import { sessionsRoutes } from './sessions-routes';
import { deliveriesRoutes } from './deliveres-routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/deliveries', deliveriesRoutes);

export { routes };