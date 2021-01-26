import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NODE_ENV_VARIABLE_NAME, NODE_PORT_VARIABLE_NAME } from './constant';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class NodeConfigService {
	constructor(private configService: ConfigService) {}

	get port(): number {
		return this.configService.get<number>(NODE_PORT_VARIABLE_NAME);
	}

	get nodeEnv(): string {
		return this.configService.get<string>(NODE_ENV_VARIABLE_NAME);
	}

	public isDevMode(): boolean {
		return this.nodeEnv === 'development';
	}
}
