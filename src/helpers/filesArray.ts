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
				'ПОШАГОВАЯ_ИНСТРУКЦИЯ_ДЛЯ_РЕГИСТРАЦИИ_НА_БИРЖЕ_BYBIT_НА_КОМПЬЮТЕРЕ.pdf',
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
				'пошаговая инструкция моб_compressed.pdf',
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
				'Базовые_правила_инвестиций_в_криптовалюты.pdf',
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
				'Как_выбрать_криптовалюты_для_депозита.pdf',
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
				'Пошаговая_инструкция_по_выбору_активов_для_стейкинга.pdf',
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
				'Покупка_криптовалют_методом_Р2Р_мобильная_версия.pdf',
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
				'ЧТО_ТАКОЕ_ФАРМИНГ_И_КАК_ЭТО_РАБОТАЕТ.pdf',
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
				'КАК_ВЫбРАТЬ_ПРОЕКТЫ_ДЛЯ_ФАРМИНГА_.pdf',
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
				'Как_отбирать_криптовалюты_для_своего_портфеля.pdf',
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
				'Как_выбрать_криптовалюту_для_стейкинга.pdf',
			),
		},
	},
];
