const { Composer } = require('micro-bot');
const Extra = require('telegraf/extra');
const { postMeme } = require('./functions/commands');
const { getRandomMemeImage } = require('./functions/commons');
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

module.exports = bot;
