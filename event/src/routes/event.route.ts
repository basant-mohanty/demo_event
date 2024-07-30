import { Router } from 'express';

import { logger } from '../utils/logger.utils';
import { eventHandler } from '../controllers/event.controller';

const eventRouter: Router = Router();

eventRouter.post('/', eventHandler);

export default eventRouter;
