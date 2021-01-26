export class ConfigNotFoundError extends Error {
	constructor(envName: string) {
		super();

		this.name = 'ConfigNotFoundError';
		this.message = `env variable ${envName} is not found`;
	}
}
