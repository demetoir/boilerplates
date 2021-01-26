import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NodeConfigService } from './node-config.service';

@Module({
	imports: [ConfigModule],
	providers: [NodeConfigService],
	exports: [NodeConfigService],
})
export class NodeConfigModule {}
