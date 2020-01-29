import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { App } from './App';
import { config } from './ormconfig';
import { validateEnv } from './utils/validateEnv';

const main = async () => {
  validateEnv();
  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
  } catch (error) {
    throw error;
  }
  const app = new App([]);

  app.listen();
};

main();
