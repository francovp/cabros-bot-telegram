const axios = require('axios');

exports.RandomMeme = class {
	async GetImage(subreddit) {
		try {
			const response = await axios.get('https://meme-api.herokuapp.com/gimme/' + subreddit);
			return Promise.resolve(response.data.url);
		}
		catch (error) {
			return Promise.reject(error);
		}
	}
};
