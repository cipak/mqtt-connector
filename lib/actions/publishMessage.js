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

exports.process = processWrapper(processAction);

let client;
/**
 * Publish a message to a specific topic
 *
 * @param {object} msg - incoming message
 * @param {object} msg.body - incoming message body
 * @param {string} msg.body.topic - topic at which to publish message
 * @param {string} msg.body.message - message to publish
 * @param {object} cfg
 * */
async function processAction(msg, cfg, snp) {
    let {topic, message} = msg.body;

    if(!topic) {
        throw new Error('Incoming message does not contain a topic field');
    }
    if(!message) {
        throw new Error('Incoming message does not contain a message field');
    }

    client = await getMQTTClient(cfg);

    message = typeof message === 'object' ? JSON.stringify(message) : String(message);

    console.log('Publishing to topic:', topic);
    await client.publish(topic, message);
    console.log('Published');

    this.emitData({topic, message});

    await client.end();
}