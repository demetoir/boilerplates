export class ConfigValidationError extends Error {
	constructor(envName: string, description: string) {
		super();

		this.name = 'ConfigValidationError';
		this.message = `env variable ${envName} is invalid, ${description}`;
	}
}
