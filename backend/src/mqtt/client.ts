import { client } from "./mqtt";

import { BottleCapService } from "@/services/bottle-cap";
import dotenv from "dotenv";

dotenv.config();

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
