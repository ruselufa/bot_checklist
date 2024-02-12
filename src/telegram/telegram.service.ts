import { Injectable } from '@nestjs/common';
import { ErrorLoggerService } from 'src/error-logger/error-logger.service';
import {
	filesArray1,
	filesArray2,
	filesArray3,
	filesArray4,
	filesArray5,
	filesArray6,
} from 'src/helpers/filesArray';
// import { ConfigService } from '@nestjs/config';
// import { getBotToken } from 'src/configs/token.config';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
	private bot: Telegraf;

	constructor(private readonly errorLogger: ErrorLoggerService) {
		this.bot = new Telegraf('6594921942:AAGkRhlqIsyEtCjXtOh-73BNVvzB_SOBQSI');

		this.bot.start(async (ctx) => {
			await ctx.reply(
				'Привет! Добро пожаловать!',
				Markup.inlineKeyboard([
					Markup.button.callback('Получить бонусы', 'getbonus1'),
					// Markup.button.callback('Получить бонус2', 'getbonus2'),
				]),
			);
		});

		this.bot.action('getbonus1', async (ctx) => {
			try {
				await ctx.reply('Оформляю бонусы');
				await delay(2000);
				await ctx.reply('Загружаю бонусы в сеть');
				await delay(2000);
				await ctx.reply('Начинаю отправку');
				await sendMediaGroup(ctx, filesArray1);
				await sendMediaGroup(ctx, filesArray2);
				await sendMediaGroup(ctx, filesArray3);
				await sendMediaGroup(ctx, filesArray4);
				await sendMediaGroup(ctx, filesArray5);
				await sendMediaGroup(ctx, filesArray6);
				await ctx.reply('Все отправлено');
			} catch (error) {
				console.error('Ошибка при выполнении запроса:', error);
				this.errorLogger.logError(error);
				return ctx.reply('Произошла ошибка при отправке. Пожалуйста, попробуйте снова.');
			}
		});

		// Функция для задержки
		async function delay(ms: number) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		}

		// Функция для отправки группы медиафайлов
		async function sendMediaGroup(ctx, files) {
			try {
				await ctx.replyWithMediaGroup(files);
			} catch (error) {
				console.error('Ошибка при отправке медиафайлов:', error);
				throw error; // Выкидываем ошибку, чтобы она обработалась в блоке try-catch выше
			}
		}

		this.bot.launch().then(() => {
			console.log('Telegram bot запущен');
		});
	}
}
