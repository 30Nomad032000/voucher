import { Elysia } from "elysia"
import { logger } from "@bogeychan/elysia-logger"
import itemRoutes from "./routes/items"
import { DbError } from "./exceptions/DbError"
import { cors } from "@elysiajs/cors"

const port = process.env.PORT || 3000

new Elysia()
    .use(
        cors({
            origin: "*", // allow all origins
            methods: ["GET", "POST", "PUT", "DELETE"], // allow all methods
        })
    )
    .error({
        DbError,
    })
    .group("", (app) => app.use(itemRoutes))
    .use(
        logger({
            level: "error",
        })
    )
    .listen(port, (app) => {
        console.log(`🦊 Elysia is running ${app.url}`)
    })
