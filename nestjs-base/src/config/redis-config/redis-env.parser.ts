import { ConfigNotFoundError } from '../error';
import { IRedisEnvConfig } from './types';
import {
	REDIS_HOST_VARIABLE_NAME,
	REDIS_PORT_VARIABLE_NAME,
} from './constants';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const redisEnvParser = (env: any): IRedisEnvConfig => {
	const port = Number.parseInt(env[REDIS_PORT_VARIABLE_NAME], 10);

	if (Number.isNaN(port)) {
		throw new ConfigNotFoundError(REDIS_PORT_VARIABLE_NAME);
	}

	const host = env[REDIS_HOST_VARIABLE_NAME];

	if (host === 'undefined' || host === null) {
		throw new ConfigNotFoundError(REDIS_HOST_VARIABLE_NAME);
	}

	return { REDIS_PORT: port, REDIS_HOST: host } as IRedisEnvConfig;
};
