/**
 * flowground :- Telekom iPaaS / mqtt-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */

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