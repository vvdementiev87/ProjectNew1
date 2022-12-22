import { Telegram } from 'src/telegram/telegram.interface';

export const getTelegramConfig = (): Telegram => ({
	// https://api.telegram.org/bot123455666:token/getUpdates

	chatId: '',
	token: '',
});
