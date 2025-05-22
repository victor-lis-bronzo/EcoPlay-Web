declare namespace NodeJS {
  interface ProcessEnv {
    SECRET_JWT_KEY: string;
    DATABASE_URL: string;
    MQTT_BROKER: string;
    MQTT_USERNAME: string;
    MQTT_PASSWORD: string;
    SERVER_URL: string;
    PORT: string;
  }
}
