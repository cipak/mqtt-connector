const mqtt = require('async-mqtt');

/**
 * MQTT Connector
 *
 * @param {object} config
 * @param {string} config.brokerUrl
 * @param {string} config.username
 * @param {string} config.password
 * @param {string} config.caCertificates
 * @param {boolean} config.dontCheckBrokerCertificate
 * */
module.exports = async config => {
    if(!config.brokerUrl) {
        throw new Error('Broker URL field is required');
    }

    let brokerUrl = config.brokerUrl;

    let options = {
        username: config.username || undefined,
        password: config.password || undefined,
        ca: config.caCertificates || undefined,
        rejectUnauthorized: !config.dontCheckBrokerCertificate,
    };

    console.log('Connecting to MQTT broker', brokerUrl);
    let client = await mqtt.connectAsync(brokerUrl, options);
    console.log('Connected');
    return client;
};