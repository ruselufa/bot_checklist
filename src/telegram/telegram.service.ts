import { Injectable } from '@nestjs/common';
import { error } from 'console';
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
			const username = ctx.message.from.first_name;
			ctx.reply(
				`Поздравляем, ${username}!

Вы успешно подключили бота!

В 4 уроке мы приготовили для вас много подарков!

Поэтому дойдите до 4 урока, чтобы забрать ваши бонусы. До скорой встречи, буду ждать вас здесь:)`,
				Markup.inlineKeyboard([
					Markup.button.url('Вернуться к 1 уроку', 'https://online.azat-valeev.ru/course-practic-av-lesson-01'),
				])
			);
		});

		this.bot.hears(/халвинг/i, async (ctx) => {
			setTimeout(async () => {
				try {
					await ctx.reply('Как и договаривались! Высылаем вам дополнительные материалы к уроку ценностью 10 000 руб.');
					await delay(2000);
					await ctx.reply('Оформляем бонусы');
					await delay(2000);
					await ctx.reply('Загружаем бонусы в сеть');
					await delay(2000);
					await ctx.reply('Начинаем отправку');
	
					const promises = [
						sendMediaGroup(ctx, filesArray1).catch(error => { throw error; }),
						sendMediaGroup(ctx, filesArray2).catch(error => { throw error; }),
						sendMediaGroup(ctx, filesArray3).catch(error => { throw error; }),
						sendMediaGroup(ctx, filesArray4).catch(error => { throw error; }),
						sendMediaGroup(ctx, filesArray5).catch(error => { throw error; }),
						sendMediaGroup(ctx, filesArray6).catch(error => { throw error; }),
					];
	
					const results = await Promise.allSettled(promises);
					results.forEach(result => {
						if (result.status === 'rejected') {
							console.error('Ошибка при выполнении запроса: ', error);
							this.errorLogger.logError(result.reason);
						}
					})
					await delay(2000);
					await ctx.reply(`Ойй...Что мы вам приготовили в 5 уроке!
	
	Этот тот самый подарок, который доступен всего 24 часа! Быстрее переходите к следующему уроку!
	`,
						Markup.inlineKeyboard([
							Markup.button.url('Вернуться к 4 уроку', 'https://online.azat-valeev.ru/course-practic-av-lesson-04'),
						])
					);
	
	
				} catch (error) {
					console.error('Ошибка при выполнении запроса:', error);
					this.errorLogger.logError(error);
					return ctx.reply('Произошла ошибка при отправке. Пожалуйста, попробуйте снова.');
				}
			}, 0);
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
