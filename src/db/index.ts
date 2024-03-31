import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import { Client } from "pg";

if (
  !process.env.DB_URL ||
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD
) {
  throw new Error("Missing DB_URL environment variable");
}

if (
  !process.env.DB_URL ||
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD
) {
  throw new Error("Missing DB_URL environment variable");
}

const client = new Client({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

await client.connect();

export const db = drizzle(client, { schema });
