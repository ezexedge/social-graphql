var admin = require('firebase-admin');

var serviceAccount = require('../firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    // databaseURL: 'https://gqlreactnode99.firebaseio.com'
});

exports.authCheck = async (req) => {
    try {
        
        console.log(req)
        
        const currentUser = await admin.auth().verifyIdToken(req.headers.authtoken);
        console.log('CURRENT USER', currentUser);
        return currentUser;
    } catch (error) {
        console.log('AUTH CHECK ERROR', error);
        throw new Error('Invalid or expired token');
    }
};
