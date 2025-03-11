import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();

router.post('/register', userController.Register);
router.post('/login', userController.Login);

export default router;