import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"
import * as schema from "./schema"

if (!process.env.DB_URL) {
    throw new Error("DATABASE_URL is not set")
}

const sql = neon(process.env.DB_URL)

export const db = drizzle(sql, {
    schema,
})
