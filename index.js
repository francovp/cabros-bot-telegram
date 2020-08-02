const { Composer } = require('micro-bot');
const bot = new Composer;

bot.command('hola', message=> {
	message.reply('Hola Mundo');
});
bot.start('praise', message =>{
	console.log('Inicia Bot...');
});

module.exports = bot
