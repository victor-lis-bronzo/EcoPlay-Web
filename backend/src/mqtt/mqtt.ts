import dotenv from "dotenv";
dotenv.config();

import mqtt from "mqtt";
// import { mqttEvents, MqttEvents } from "./events";

console.log("Chamando o cliente MQTT");
console.log("Broker MQTT:", process.env.MQTT_BROKER);
console.log("Username:", process.env.MQTT_USERNAME);
console.log("Password:", process.env.MQTT_PASSWORD);

export const client = mqtt.connect(process.env.MQTT_BROKER as string, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});
