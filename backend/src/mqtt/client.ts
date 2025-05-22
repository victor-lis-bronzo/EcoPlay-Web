import { BottleCapService } from "@/services/bottle-cap";
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

client.on("connect", () => {
  console.log("🔗 Conectado ao broker MQTT");
  console.log("✅ Conectado ao broker MQTT");
  client.subscribe("controller/+/increment");
  client.subscribe("controller/+/online");
});

client.on("message", (topic: string, payload: Buffer) => {
  const message = payload.toString();
  const parts = topic.split("/");

  if (parts[0] === "controller" && parts[2] === "increment") {
    const controllerCode = parts[1];
    const count = Number.parseInt(message, 10);

    console.log(`🔔 Contagem recebida: ${count} (${controllerCode})`);
    BottleCapService.createBottleCap({
      controllerCode,
    });
  } else if (parts[0] === "controller" && parts[2] === "online") {
    const controllerCode = parts[1];
    const status = message === "online";

    console.log(`🔔 Status recebido: ${status} (${controllerCode})`);
  } else {
    console.warn(`⚠️ Tipo de tópico desconhecido: ${topic}`);
  }
});
