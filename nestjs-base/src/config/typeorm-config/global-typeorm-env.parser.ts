import { ITypeormConfig } from './types';
import { EnvNotFoundError } from '../config-loader/error/env-not-found.error';
import { EnvValidationError } from '../config-loader/error/env-validation.error';
import {
	DEFAULT_GLOBAL_TYPEORM_LOGGING,
	DEFAULT_GLOBAL_TYPEORM_SYNCHRONIZE,
	GLOBAL_TYPEORM_DATABASE_VARIABLE_NAME,
	GLOBAL_TYPEORM_HOST_VARIABLE_NAME,
	GLOBAL_TYPEORM_LOGGING_VARIABLE_NAME,
	GLOBAL_TYPEORM_PASSWORD_VARIABLE_NAME,
	GLOBAL_TYPEORM_PORT_VARIABLE_NAME,
	GLOBAL_TYPEORM_SYNCHRONIZE_VARIABLE_NAME,
	GLOBAL_TYPEORM_TYPE_VARIABLE_NAME,
	GLOBAL_TYPEORM_USERNAME_VARIABLE_NAME,
} from './constants';

const logger = console;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const globalTypeormEnvParser = (env: any): ITypeormConfig => {
	const type = env[GLOBAL_TYPEORM_TYPE_VARIABLE_NAME];

	if (!type) {
		throw new EnvNotFoundError(GLOBAL_TYPEORM_TYPE_VARIABLE_NAME);
	}

	const host = env[GLOBAL_TYPEORM_HOST_VARIABLE_NAME];

	if (!host) {
		throw new EnvNotFoundError(GLOBAL_TYPEORM_HOST_VARIABLE_NAME);
	}

	const port = Number.parseInt(env[GLOBAL_TYPEORM_PORT_VARIABLE_NAME], 10);

	if (Number.isNaN(port)) {
		throw new EnvValidationError(
			GLOBAL_TYPEORM_PORT_VARIABLE_NAME,
			'value is Nan',
		);
	}

	const userName = env[GLOBAL_TYPEORM_USERNAME_VARIABLE_NAME];

	if (!userName) {
		throw new EnvNotFoundError(GLOBAL_TYPEORM_USERNAME_VARIABLE_NAME);
	}

	const password = env[GLOBAL_TYPEORM_PASSWORD_VARIABLE_NAME];

	if (!password) {
		throw new EnvNotFoundError(GLOBAL_TYPEORM_PASSWORD_VARIABLE_NAME);
	}

	const database = env[GLOBAL_TYPEORM_DATABASE_VARIABLE_NAME];

	if (!database) {
		throw new EnvNotFoundError(GLOBAL_TYPEORM_DATABASE_VARIABLE_NAME);
	}

	let synchronize = env[GLOBAL_TYPEORM_SYNCHRONIZE_VARIABLE_NAME];

	if (!synchronize) {
		logger.warn(
			`env variable ${GLOBAL_TYPEORM_SYNCHRONIZE_VARIABLE_NAME} is undefined, use default as ${DEFAULT_GLOBAL_TYPEORM_SYNCHRONIZE}`,
		);
		synchronize = DEFAULT_GLOBAL_TYPEORM_SYNCHRONIZE;
	}

	let logging = env[GLOBAL_TYPEORM_LOGGING_VARIABLE_NAME];

	if (!logging) {
		logger.warn(
			`env variable ${GLOBAL_TYPEORM_LOGGING_VARIABLE_NAME} is undefined, use default as ${DEFAULT_GLOBAL_TYPEORM_LOGGING}`,
		);
		logging = DEFAULT_GLOBAL_TYPEORM_LOGGING;
	}

	return {
		GLOBAL_TYPEORM_TYPE: type,
		GLOBAL_TYPEORM_HOST: host,
		GLOBAL_TYPEORM_PORT: port,
		GLOBAL_TYPEORM_USERNAME: userName,
		GLOBAL_TYPEORM_PASSWORD: password,
		GLOBAL_TYPEORM_DATABASE: database,
		GLOBAL_TYPEORM_SYNCHRONIZE: synchronize,
		GLOBAL_TYPEORM_LOGGING: logging,
	} as ITypeormConfig;
};
