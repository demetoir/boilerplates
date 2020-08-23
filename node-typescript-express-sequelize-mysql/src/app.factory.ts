import { Express } from 'express';
import { userRouter } from './routers/user.router';


export async function appFactory(expressApp: Express): Promise<Express> {
	expressApp.use('/v1/user/', userRouter);

	return expressApp;
}





