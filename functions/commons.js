const { RandomMeme } = require('./meme/randomMeme');

exports.getRandomMemeImage = async (subreddit) => {
	try {
		const randomMeme = new RandomMeme();
		const image = await randomMeme.GetImage(subreddit);
		return Promise.resolve(image);
	} catch (error) {
		return Promise.reject(error);
	}
};

exports.postMeme = async (context, subreddit) => {
	try {
		const response = await this.getRandomMemeImage(subreddit);
		context.replyWithPhoto(response).then(() => {
			return Promise.resolve();
		}).catch((error) => {
			return Promise.reject(error);
		});
	} catch (error) {
		return Promise.reject(error);
	}
};
