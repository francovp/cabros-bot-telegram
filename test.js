const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const bot = new Telegraf(process.env.bot_test)

bot.command('hola', message=> {
	message.reply('Hola Mundo');
});
bot.start('praise', message =>{
	console.log('Inicia Bot...');
});

bot.launch();
