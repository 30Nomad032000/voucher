import type { Config } from "drizzle-kit"
import * as dotenv from "dotenv"
dotenv.config()

export default {
    schema: "./src/db/schema/index.ts",
    out: "./src/db/drizzle",
} satisfies Config
