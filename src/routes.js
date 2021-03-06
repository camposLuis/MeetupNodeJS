import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SheduleController from './app/controllers/SheduleController';
import SubscriptionController from './app/controllers/SubscriptionController';
import DetailMeetupController from './app/controllers/DetailMeetupController';
import SubscriptionMeetupController from './app/controllers/SubscriptionMeetupController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/meetups', MeetupController.index);
routes.get('/meetups/:id/detail', DetailMeetupController.index);
routes.get('/meetups/:id/subscriptions', SubscriptionMeetupController.index);
routes.post('/meetups', MeetupController.store);
routes.put('/meetups/:id', MeetupController.update);
routes.delete('/meetups/:id/canceled', MeetupController.delete);

routes.get('/shedule', SheduleController.index);

routes.get('/subscriptions', SubscriptionController.index);
routes.post('/subscriptions/:meetupId', SubscriptionController.store);
routes.delete('/subscriptions/:id', SubscriptionController.delete);

export default routes;
