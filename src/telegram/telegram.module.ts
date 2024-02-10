import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ErrorLoggerService } from 'src/error-logger/error-logger.service';

@Module({
	providers: [TelegramService, ErrorLoggerService],
	exports: [TelegramService],
})
export class TelegramModule {}
