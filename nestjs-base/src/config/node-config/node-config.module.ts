import { Module } from '@nestjs/common';
import { NodeConfigService } from './node-config.service';
import { GlobalConfigModule } from '../globalConfig.module';

@Module({
	imports: [GlobalConfigModule],
	providers: [NodeConfigService],
	exports: [NodeConfigService],
})
export class NodeConfigModule {}
