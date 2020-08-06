const { Composer } = require('micro-bot');
const Extra = require('telegraf/extra');
const { getRandomMemeImage } = require('./functions/commons');
const bot = new Composer;

bot.start(ctx => {
	console.log('Inicio');
});

bot.command(['meme'], async (message) => {
	try {
		const response = await getRandomMemeImage();
		console.log('response: ', response);
		message.replyWithPhoto(response);
	}
	catch (error) {
		console.error(error);
	}
});

module.exports = bot;
