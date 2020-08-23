import * as express from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

const userService = new UserService();
const userController = new UserController(userService);

const userRouter = express.Router();


userRouter.get('/', (req, res) => {
	return userController.findMany(req, res);
});

export { userRouter };