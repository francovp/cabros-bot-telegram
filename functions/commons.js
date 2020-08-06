const { RandomMeme } = require('./meme/randomMeme');

exports.getRandomMemeImage = async (subreddit) => {
	try {
		const randomMeme = new RandomMeme();
		const image = await randomMeme.GetImage(subreddit);
		return Promise.resolve(image);
	}
	catch (error) {
		return Promise.reject(error);
	}
};
