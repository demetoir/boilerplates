import { EnvNotFoundError } from '../error/env-not-found.error';

export interface IRedisEnvConfig {
	REDIS_PORT: number;
	REDIS_HOST: string;
}

export const RedisEnvParser = (env: any): IRedisEnvConfig => {
	const port = Number.parseInt(env.REDIS_PORT, 10);

	if (Number.isNaN(port)) {
		throw new EnvNotFoundError('REDIS_PORT');
	}

	const host = env.REDIS_HOST;

	if (host === 'undefined' || host === null) {
		throw new EnvNotFoundError('REDIS_HOST');
	}

	return { REDIS_PORT: port, REDIS_HOST: host } as IRedisEnvConfig;
};
