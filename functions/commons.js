const { RandomMeme } = require('./meme/randommeme');

exports.getRandomMemeImage = async () => {
	try {
		const randomMeme = new RandomMeme();
		const image = await randomMeme.GetImage();
		return Promise.resolve(image);
	}
	catch (error) {
		return Promise.reject(error);
	}
};
