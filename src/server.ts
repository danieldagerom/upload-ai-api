import { fastify } from "fastify";
import { getAllPromtsRoute } from "./routes/get-all-prompts";

const app = fastify()

app.register(getAllPromtsRoute)

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP server running!')
})