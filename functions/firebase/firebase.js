const admin = require('firebase-admin');

exports.firebaseAdmin = initfirebaseAdmin();

function initfirebaseAdmin() {
	let firebaseConfig = {};
	if (process.env.NOVE_ENV && process.env.NOVE_ENV === 'production') {
		firebaseConfig = {
			credential: admin.credential.cert({
				type: process.env.FIREBASE_TYPE,
				project_id: process.env.FIREBASE_PROJECT_ID,
				private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
				private_key: process.env.FIREBASE_PRIVATE_KEY,
				client_email: process.env.FIREBASE_CLIENT_EMAIL,
				client_id: process.env.FIREBASE_CLIENT_ID,
				auth_uri: process.env.FIREBASE_AUTH_URI,
				token_uri: process.env.FIREBASE_TOKEN_URI,
				auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
				client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
			}),
		};
		const firebaseAdmin = admin.initializeApp(firebaseConfig);
		// '[DEFAULT]'
		console.log(firebaseAdmin.name + ' Firebase Admin initialized');
		return firebaseAdmin;
	} else {
    const firebaseAdmin = admin.initializeApp();
    console.log(firebaseAdmin.name + ' Firebase Admin initialized');
		return firebaseAdmin;
	}
}