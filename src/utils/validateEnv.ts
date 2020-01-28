import { cleanEnv, port, str } from "envalid";

export const validateEnv = () => {
  cleanEnv(process.env, {
    JWT_SECRET: str(),
    PORT: port({ default: 8000 }),
    MONGO_PATH: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str()
  });
};
