import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
	REDIS_HOST_VARIABLE_NAME,
	REDIS_PORT_VARIABLE_NAME,
} from './constants';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class RedisConfigService {
	constructor(private configService: ConfigService) {}

	get port(): number {
		return this.configService.get<number>(REDIS_PORT_VARIABLE_NAME);
	}

	get host(): string {
		return this.configService.get<string>(REDIS_HOST_VARIABLE_NAME);
	}
}
