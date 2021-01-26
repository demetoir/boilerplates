import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
	GlobalTypeormConfigModule,
	GlobalTypeormConfigService,
} from '../../../config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [GlobalTypeormConfigModule],
			inject: [GlobalTypeormConfigService],
			useFactory: async (configService: GlobalTypeormConfigService) => {
				return {
					type: configService.type,
					host: configService.host,
					port: configService.port,
					database: configService.database,
					username: configService.username,
					password: configService.password,
					synchronize: configService.synchronize,
					logging: configService.logging,
					bigNumberStrings: false,
					entities: [],
					migrations: [],
					subscribers: [],
				} as any;
			},
		}),
	],
})
export class GlobalTypeormModule {}
