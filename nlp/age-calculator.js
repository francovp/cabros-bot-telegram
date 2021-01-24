const { firebaseAdmin } = require('../functions/firebase/firebase');
const { parseDate } = require('../functions/helpers');
const { FirebaseDAL } = require('../functions/firebase/firebaseDAL');

exports.getAgeOfPerson = async (result) => {
	const firebaseDAL = new FirebaseDAL();
	const nickname = result.entities['wit$contact:contact'][0].value;
	if (nickname !== undefined) {
		const userSnapshot = await firebaseDAL.queryFormCollectionWithoutLimit('users', 'array-contains', 'nicknames', nickname, firebaseAdmin.firestore());
		if (userSnapshot.docs.length > 0) {
			const userData = userSnapshot.docs[0].data();
			const userBirthdateDate = parseDate(userData.birthDate);
			const age = calculateAge(userBirthdateDate);
			// reply to user with wit result
			return Promise.resolve(`${nickname} tiene ${age} años`);
		}
	} else {
		return Promise.resolve(null);
	}
};

function calculateAge(birthdate) { // birthday is a date
	const ageDifMs = Date.now() - birthdate.getTime();
	const ageDate = new Date(ageDifMs); // miliseconds from epoch
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}