![MQTT Connector logo](logo.png "MQTT logo")

# MQTT Connector

[MQTT](http://mqtt.org/) connector for the [Flowground plattform](https://app.flowground.net/ "Flowground platform")

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
* startFlow → basic trigger for starting a flow instance
* realtimeMessages → trigger for receiving messages from subscribed topics in real-time; it is required to set flow type to real-time
