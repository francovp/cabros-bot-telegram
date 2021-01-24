const { Composer } = require('micro-bot');
const { meme, dankmeme, catmeme, catirl, matiasSalio } = require('./functions/commands');
const bot = new Composer;
const TelegrafWit = require('telegraf-wit');
const { IntentManager } = require('./nlp/intents');
const wit = new TelegrafWit(process.env.WIT_TOKEN);

bot.start(ctx => {
	console.log('Inicio');
});

bot.command(['meme'], dankmeme);
bot.command(['dankmeme'], dankmeme);
bot.command(['catmeme'], catmeme);
bot.command(['catirl'], catirl);
bot.command(['matiassalio'], matiasSalio);

bot.on('text', (ctx) => {
	return wit.meaning(ctx.message.text)
		.then(async (result) => {
			const intentName = result.intents[0].name;
			const text = result.text;
			const intent = new IntentManager();
			await intent.parse(ctx, intentName, result.entities);
		}).catch((error) => {
			console.error(error);
		});
});

module.exports = bot;
