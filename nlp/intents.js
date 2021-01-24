const { getAgeOfPerson } = require('./age-calculator');

exports.IntentManager = class {
	async parse(ctx, intent, entities) {
		try {
			let responseText;
			if (intent === 'age_of') {
				responseText = await getAgeOfPerson(entities);
				if (responseText) {
					await ctx.reply(responseText);
					return Promise.resolve();
				}
			}
		} catch (error) {
			return Promise.reject(error);
		}
	}
};