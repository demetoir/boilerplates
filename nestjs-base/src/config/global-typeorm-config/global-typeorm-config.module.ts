import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalTypeormConfigService } from './global-typeorm-config.service';

@Module({
	imports: [ConfigModule],
	providers: [GlobalTypeormConfigService],
	exports: [GlobalTypeormConfigService],
})
export class GlobalTypeormConfigModule {}
