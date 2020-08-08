const { getRandomMemeImage } = require('./commons');

exports.postMeme = (context, params) => {
	try {
		getRandomMemeImage(params).then((image) => {
			context.replyWithPhoto(image);
		}).catch((error) => {
			console.error(error);
		});
	}
	catch (error) {
		console.error(error);
	}
};
