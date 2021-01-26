import { Module } from '@nestjs/common';
import { GlobalConfigModule } from 'src/config';
import { GlobalTypeormModule } from 'src/common/database';

@Module({
	imports: [GlobalTypeormModule, GlobalConfigModule],
})
export class AppModule {}
