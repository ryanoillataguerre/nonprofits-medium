import { Router } from 'express';
import AuthRoutes from './authentication';

const router: Router = Router();

router.use('/auth', AuthRoutes);

export default router;
