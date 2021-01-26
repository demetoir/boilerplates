export class EnvValidationError extends Error {
	constructor(envName: string, description: string) {
		super();

		this.message = `env variable ${envName} is invalid, ${description}`;
	}
}
