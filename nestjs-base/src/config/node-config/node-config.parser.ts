import {
	NODE_ENV_DEFAULT,
	NODE_PORT_DEFAULT,
	NODE_ENV_VARIABLE_NAME,
	NODE_PORT_VARIABLE_NAME,
} from './constant';
import { INodeConfig } from './types';

const logger = console;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const nodeConfigParser = (env: any): INodeConfig => {
	let nodePort = Number.parseInt(env[NODE_PORT_VARIABLE_NAME], 10);

	if (Number.isNaN(nodePort)) {
		logger.warn(
			`env variable '${NODE_PORT_VARIABLE_NAME}' is NaN, use default as ${NODE_PORT_DEFAULT}`,
		);
		nodePort = NODE_PORT_DEFAULT;
	}

	let nodeEnv = env[NODE_ENV_VARIABLE_NAME];

	if (nodeEnv === 'undefined' || nodeEnv === null) {
		logger.warn(
			`env variable '${NODE_ENV_VARIABLE_NAME}' is not specified, use default as ${NODE_ENV_DEFAULT}`,
		);
		nodeEnv = NODE_ENV_DEFAULT;
	}

	return { NODE_PORT: nodePort, NODE_ENV: nodeEnv } as INodeConfig;
};
