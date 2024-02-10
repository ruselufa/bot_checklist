import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { ErrorLoggerService } from './error-logger/error-logger.service';

@Module({
	imports: [TelegramModule],
	controllers: [AppController],
	providers: [AppService, ErrorLoggerService],
})
export class AppModule {}
