const { Composer } = require('micro-bot');
const Extra = require('telegraf/extra');
const { catmeme } = require('./functions/commands');
const { getRandomMemeImage } = require('./functions/commons');
const bot = new Composer;

bot.start(ctx => {
	console.log('Inicio');
});

bot.command(['meme'], async (message) => {
	try {
		const response = await getRandomMemeImage('memes');
		console.log('response: ', response);
		message.replyWithPhoto(response);
	}
	catch (error) {
		console.error(error);
	}
});

bot.command(['dankmeme'], async (message) => {
	try {
		const response = await getRandomMemeImage('dankmemes');
		console.log('response: ', response);
		message.replyWithPhoto(response);
	}
	catch (error) {
		console.error(error);
	}
});

bot.command(['catmeme'], catmeme);

module.exports = bot;
