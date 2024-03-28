import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { logger } from "@bogeychan/elysia-logger";

const app = new Elysia()
  .use(cors())
  .use(
    logger({
      level: "error",
    })
  )
  .get("/", () => "Hello")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
