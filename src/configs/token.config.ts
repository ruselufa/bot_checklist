import { ConfigService } from '@nestjs/config';

export const getBotToken = async (configService: ConfigService) => {
	return configService.get('BOT_TOKEN');
};
