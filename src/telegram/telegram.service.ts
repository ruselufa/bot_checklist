import { Injectable } from '@nestjs/common';
import * as path from 'path';
// import { ConfigService } from '@nestjs/config';
// import { getBotToken } from 'src/configs/token.config';
import { Markup, Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
	private bot: Telegraf;

	constructor() {
		this.bot = new Telegraf('6883551736:AAEwNnGR-hGG9HYQ2fsJv80sC6oTJZONuk4');

		// Отключаем режим ввода текста для бота
		this.bot.on('text', async (ctx) => {
			await ctx.reply('Извините, я не понимаю текстовые сообщения.');
		});

		this.bot.command('Получить бонус', async (ctx) => {
			await ctx.reply('Держите ваш бонус!');
		});

		this.bot.start(async (ctx) => {
			await ctx.reply(
				'Привет! Добро пожаловать!',
				Markup.inlineKeyboard([
					Markup.button.callback('Начать', 'start'),
					// Markup.button.callback('Получить бонус2', 'getbonus2'),
				]),
			);
		});

		this.bot.action('start', async (ctx) => {
			await ctx.reply(
				'Привет! Добро пожаловать!',
				Markup.inlineKeyboard([Markup.button.callback('Получить бонус2', 'getbonus2')]),
			);
		});

		this.bot.action('getbonus1', (ctx) => {
			const filePath = path.resolve(__dirname, '..', '..', 'local_files', 'invoice.pdf');
			return ctx.replyWithDocument({ source: filePath });
		});

		this.bot.launch().then(() => {
			console.log('Telegram bot запущен');
		});
	}
}
