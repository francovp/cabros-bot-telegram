const axios = require('axios');

exports.RandomMeme = class {
	async GetImage() {
		try {
			const response = await axios.get('https://meme-api.herokuapp.com/gimme');
			console.log('response: ', response);
			return Promise.resolve(response.data.url);
		}
		catch (error) {
			return Promise.reject(error);
		}
	}
};
