/**
 * flowground :- Telekom iPaaS / mqtt-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */

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