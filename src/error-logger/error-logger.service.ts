import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class ErrorLoggerService {
	private readonly logFilePath: string;

	constructor() {
		this.logFilePath = path.join(__dirname, '..', '..', 'logs', 'errors.log');
		this.createLogFileIfNotExists();
	}

	async logError(error: Error): Promise<void> {
		const errorMessage = `[${new Date().toISOString()}] ${error.message}\n`;
		try {
			await fs.appendFile(this.logFilePath, errorMessage);
		} catch (err) {
			console.error('Ошибка при записи в лог:', err);
		}
	}

	private async createLogFileIfNotExists(): Promise<void> {
		const dirPath = path.dirname(this.logFilePath);
		try {
			// Проверяем существование директории
			const dirPath = path.dirname(this.logFilePath);
			await fs.access(dirPath, fs.constants.F_OK);
		} catch (err) {
			// Если директория не существует, создаем ее
			try {
				await fs.mkdir(dirPath, { recursive: true });
			} catch (err) {
				console.error('Ошибка при создании директории:', err);
			}
		}
		try {
			// Проверяем существование файла синхронно
			fs.access(this.logFilePath, fs.constants.F_OK);
		} catch (err) {
			// Если файла нет, создаем его
			try {
				fs.writeFile(this.logFilePath, '');
				console.log('Файл лога успешно создан');
			} catch (err) {
				console.error('Ошибка при создании файла лога:', err);
			}
		}
	}
}
