import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { App } from './App';
import { config } from './ormconfig';
import { validateEnv } from './utils/validateEnv';

validateEnv();

const main = async () => {
  try {
    const connection = await createConnection(config);
    await connection.runMigrations();
    console.log('lol');
  } catch (error) {
    console.log(error);
    throw error;
  }
  const app = new App([]);

  app.listen();
};

main();
