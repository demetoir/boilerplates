export class EnvNotFoundError extends Error {
	constructor(envName: string) {
		super();

		this.message = `env variable ${envName} is not found`;
	}
}
