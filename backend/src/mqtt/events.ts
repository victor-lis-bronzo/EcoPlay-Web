// import { EventEmitter } from "node:events";
// import { io } from "../app";
// // import { controllerStatus } from "../utils/locker-controller-status";

// export const mqttEvents = new EventEmitter();

// export enum MqttEvents {
//   LockerOpened = "locker:opened",
//   LockerCode = "locker:code",
//   LockerOnline = "locker:online",
// }

// mqttEvents.on(MqttEvents.LockerOnline, ({ controllerCode, status }) => {
//   if (controllerStatus[controllerCode] !== status) {
//     io.emit("lockerOnline", {
//       controllerCode,
//       status,
//     });

//     console.log(
//       `[Controller] Emitindo evento "lockerOnline" para a controladora ${controllerCode} com o status ${status}`
//     );

//     // Atualizar o status anterior
//     controllerStatus[controllerCode] = status;
//   }
// });
