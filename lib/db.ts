import { Client } from "pg";

const globalForDB = global as unknown as {
  postgres: Client | undefined;
};

const pgClient =
  globalForDB.postgres ??
  new Client({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
  });

globalForDB.postgres ?? pgClient.connect();

export default pgClient;

if (process.env.NODE_ENV !== "production") {
  globalForDB.postgres = pgClient;
}
