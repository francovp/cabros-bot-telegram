const { Composer } = require('micro-bot');
const { meme, dankmeme, catmeme, catirl } = require('./functions/commands');
const bot = new Composer;

bot.start(ctx => {
	console.log('Inicio');
});

bot.command(['meme'], dankmeme);
bot.command(['dankmeme'], dankmeme);
bot.command(['catmeme'], catmeme);
bot.command(['catirl'], catirl);

module.exports = bot;
