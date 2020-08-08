const { Composer } = require('micro-bot');
const Extra = require('telegraf/extra');
const { postMeme } = require('./functions/commands');
const bot = new Composer;

bot.start(ctx => {
	console.log('Inicio');
});

bot.command(['meme'], (context) => {
	postMeme(context, 'memes');
});

bot.command(['dankmeme'], (context) => {
	postMeme(context, 'dankmemes');
});

bot.command(['catmeme'], (context) => {
	postMeme(context, 'Catmemes');
});

bot.command(['catirl'], (context) => {
	postMeme(context, 'MEOW_IRL');
});

module.exports = bot;
