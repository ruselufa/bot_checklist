/* eslint-disable @typescript-eslint/no-unused-vars */
import { Context } from 'telegraf';

export function blockAllMessagesMiddleware() {
	return async (ctx: Context, next: () => Promise<any>) => {
		return;
	};
}
