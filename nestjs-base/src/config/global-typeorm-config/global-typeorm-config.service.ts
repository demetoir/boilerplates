import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
	GLOBAL_TYPEORM_DATABASE_VARIABLE_NAME,
	GLOBAL_TYPEORM_HOST_VARIABLE_NAME,
	GLOBAL_TYPEORM_LOGGING_VARIABLE_NAME,
	GLOBAL_TYPEORM_PASSWORD_VARIABLE_NAME,
	GLOBAL_TYPEORM_PORT_VARIABLE_NAME,
	GLOBAL_TYPEORM_SYNCHRONIZE_VARIABLE_NAME,
	GLOBAL_TYPEORM_TYPE_VARIABLE_NAME,
	GLOBAL_TYPEORM_USERNAME_VARIABLE_NAME,
} from './constants';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class GlobalTypeormConfigService {
	constructor(private configService: ConfigService) {}

	get type(): string {
		return this.configService.get<string>(
			GLOBAL_TYPEORM_TYPE_VARIABLE_NAME,
		);
	}

	get host(): string {
		return this.configService.get<string>(
			GLOBAL_TYPEORM_HOST_VARIABLE_NAME,
		);
	}

	get port(): number {
		return this.configService.get<number>(
			GLOBAL_TYPEORM_PORT_VARIABLE_NAME,
		);
	}

	get username(): string {
		return this.configService.get<string>(
			GLOBAL_TYPEORM_USERNAME_VARIABLE_NAME,
		);
	}

	get password(): string {
		return this.configService.get<string>(
			GLOBAL_TYPEORM_PASSWORD_VARIABLE_NAME,
		);
	}

	get database(): string {
		return this.configService.get<string>(
			GLOBAL_TYPEORM_DATABASE_VARIABLE_NAME,
		);
	}

	get synchronize(): boolean {
		return this.configService.get<boolean>(
			GLOBAL_TYPEORM_SYNCHRONIZE_VARIABLE_NAME,
		);
	}

	get logging(): boolean {
		return this.configService.get<boolean>(
			GLOBAL_TYPEORM_LOGGING_VARIABLE_NAME,
		);
	}
}
