import * as path from 'path';
import { InputMediaDocument } from 'telegraf/typings/core/types/typegram';

export const filesArray1: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Пошаговая инструкция для регистрации на бирже Bybit на компьютере.pdf',
			),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Пошаговая инструкция мобильная версия.pdf',
			),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Базовые правила инвестиций в криптовалюты.pdf',
			),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Как выбрать криптовалюты для депозита.pdf',
			),
		},
	},
];

export const filesArray2: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Пошаговая инструкция по выбору активов для стейкинга.pdf',
			),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(__dirname, '..', '..', 'local_files', 'Что такое стейкинг.pdf'),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Покупка криптовалют методом Р2Р мобильная версия.pdf',
			),
		},
	},
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Покупка криптовалют методом Р2Р.pdf',
			),
		},
	},
];

export const filesArray3: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Что такое фарминг и как это работает.pdf',
			),
		},
	},
];

export const filesArray4: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Как выбрать проекты для фарминга.pdf',
			),
		},
	},
];

export const filesArray5: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Как отбирать криптовалюты для своего портфеля.pdf',
			),
		},
	},
];

export const filesArray6: InputMediaDocument[] = [
	{
		type: 'document',
		media: {
			source: path.resolve(
				__dirname,
				'..',
				'..',
				'local_files',
				'Как выбрать криптовалюту для стейкинга.pdf',
			),
		},
	},
];
