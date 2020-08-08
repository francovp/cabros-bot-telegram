const { postMeme } = require('./commons');

exports.meme = async (context) => {
	try {
		await postMeme(context, 'memes');
	} catch (error) {
		console.error(error);
	}
};

exports.dankmeme = async (context) => {
	try {
		await postMeme(context, 'dankmemes');
	} catch (error) {
		console.error(error);
	}
};

exports.catmeme = async (context) => {
	try {
		await postMeme(context, 'Catmemes');
	} catch (error) {
		console.error(error);
	}
};

exports.catirl = async (context) => {
	try {
		await postMeme(context, 'MEOW_IRL');
	} catch (error) {
		console.error(error);
	}
};
