import { INestApplication } from '@nestjs/common';
import * as express from 'express';
import { appFactory } from 'src/app';
import { NodeConfigService } from './config';

const logger = console;

async function start() {
	const expressApp = express();

	const app: INestApplication = await appFactory(expressApp);

	const nodeConfigService = app.get(NodeConfigService);

	await app.listen(nodeConfigService.port);

	logger.info(`app listen port ${nodeConfigService.port}`);
}

start()
	.then(() => {
		logger.info('complete bootstrapping app');
	})
	.catch((e) => {
		logger.error('fail to bootstrap app');
		logger.error(e);
	});
