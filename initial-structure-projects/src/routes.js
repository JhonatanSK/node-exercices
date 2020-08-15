import { Router } from 'express';

const routes = new Router();

//Example for create routes
routes.post('/exampleRequisition', ExampleController.store);
routes.put('/exampleRequisition', ExampleController.put);

//Example for use middlewares in routes after line 10 
routes.use(authMiddleware);

//Another example for create routes
routes.put('/users', UserController.update);

export default routes;