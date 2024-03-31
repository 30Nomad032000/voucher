import { Pool } from "pg";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";

async function main() {
  const pool = new Pool({ connectionString: process.env.DB_URL });
  const db: NodePgDatabase = drizzle(pool);
  console.log("Migrating database...");
  await migrate(db, { migrationsFolder: "./src/db/drizzle" });
  console.log("Database migrated successfully");
  await pool.end();
}

main();
