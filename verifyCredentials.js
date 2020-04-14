const getMQTTClient = require('./lib/services/getMQTTClient');

module.exports = verify;

async function verify(credentials) {
    try {
        return await getMQTTClient(credentials);
    } catch(e) {
        console.log('Failed to verify credentials', e);
        throw e;
    }
}