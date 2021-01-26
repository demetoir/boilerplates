import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { loadDotenv } from './dotenv-loader';
import { nodeConfigParser } from './node-config';
import { globalTypeormEnvParser } from './global-typeorm-config';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [
				() => {
					const env = loadDotenv();

					return {
						...nodeConfigParser(env),
						...globalTypeormEnvParser(env),
					};
				},
			],
		}),
	],
})
export class GlobalConfigModule {}
