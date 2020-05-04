# ![LOGO](logo.png) MQTT **flow**ground Connector

[MQTT](http://mqtt.org/) connector for the [flowground platform](https://app.flowground.net/ "flowground platform")

> [MQTT](http://mqtt.org/) is a connectivity protocol for machine-to-machine(M2M)/"Internet of Things"

## Setting up credentials
The first step in using MQTT connector is configuring the credentials
1. On platform go to "Integrate → Credentials"
2. Select the MQTT connector
3. Select "+ Add New Credential"
4. Give your credentials a name
5. Use Broker URL for the server to which you want to connect
6. Add your username and password
8. Click on "Verify"
9. Click on "Save"

## Using the connector
### triggers:
* realtimeMessages → trigger for receiving messages from subscribed topics in real-time; it is required to set flow type to real-time

### actions:
* publishMessage → action for publishing a message to a specific topic

## License

**flow**ground :- Telekom iPaaS / mqtt-connector<br/>
Copyright © 2020, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: https://flowground.net/en/support-and-contact

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the top-level directory.