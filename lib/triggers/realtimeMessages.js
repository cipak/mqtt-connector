/**
 * flowground :- Telekom iPaaS / mqtt-connector
 * Copyright © 2020, Deutsche Telekom AG
 * contact: https://flowground.net/en/support-and-contact
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the top-level directory.
 */

const getMQTTClient = require('../services/getMQTTClient');
const processWrapper = require('../services/process-wrapper');

let run = 0;
let client;
/**
 * Init function
 * @returns {Promise}
 */
exports.init = function() {
    console.log('---INIT');
    return Promise.resolve();
};

/**
 * Startup function
 * @returns {Promise}
 */
exports.startup = function() {
    console.log('---STARTUP');
    return Promise.resolve();
};

exports.process = processWrapper(processAction);

/**
 * Receive real-time messages from subscribed topics
 *
 * @param {object} cfg
 * @param {string} cfg.topics - one or more topics
 * */
async function processAction(msg, cfg, snp) {
    run++;
    console.log('---RUN', run);
    if (run > 1) {
        return;
    }

    const topics = cfg.topics.match(/[\S]+/g);
    if(!topics) {
        throw new Error('Please provide at least one topic.');
    }

    client = await getMQTTClient(cfg);

    console.log('Subscribing to', topics);
    let subscribed = await client.subscribe(topics);
    console.log('Subscribed to', subscribed.map(sub => sub.topic));

    client.on('message', (topic, message) => {
        // message is Buffer
        this.emitData({topic, message: message.toString()});
    });

    client.on('error', err => {
        console.log('---ERROR', err);
        this.emitError(err);
    })
}

exports.shutdown = function() {
    return client.end();
};