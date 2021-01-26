import { resolve } from 'path';
import * as dotenv from 'dotenv';

const getDotEnv = (nodeEnv = 'development') => {
	const envDir = `${__dirname}/../../../env`;

	const mapper = {
		development: `${envDir}/.env.dev`,
		production: `${envDir}/.env.prod`,
		test: `${envDir}/.env.test`,
	};

	if (!(nodeEnv in mapper)) {
		throw new Error(`NODE_ENV ${nodeEnv} is not expected value`);
	}

	const path = resolve(mapper[nodeEnv]);

	return dotenv.config({ path }).parsed;
};

export const loadDotenv = (): any => {
	const dotEnv = getDotEnv(process.env.NODE_ENV);

	return { ...process.env, dotEnv };
};
