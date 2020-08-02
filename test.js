const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TEST)
const axios = require('axios');

bot.start(ctx => {
	console.log('Inicio');
})

bot.command(['hola', 'wena'], message=> {
	message.reply('Wena cabros');
});

bot.command('gato', async (message) =>{
	axios.defaults.headers.common['x-api-key'] = process.env.CAT_KEY;
	let response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', { params: { limit:1, size:"full" } } )
	this.image = response.data[0]
	message.replyWithAnimation(this.image.url);
});

bot.launch();
