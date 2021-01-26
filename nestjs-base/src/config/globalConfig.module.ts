import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configurationLoader } from './configurationLoader';

@Module({
	imports: [
		ConfigModule.forRoot({

			load: [],
			isGlobal: true,
		}),
	],
})
export class GlobalConfigModule {}
