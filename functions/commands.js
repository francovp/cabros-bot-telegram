const { getRandomMemeImage } = require('./commons');

exports.catmeme = async (message) => {
	try {
		const response = await getRandomMemeImage('Catmemes');
		console.log('response: ', response);
		message.replyWithPhoto(response);
	}
	catch (error) {
		console.error(error);
	}
};
