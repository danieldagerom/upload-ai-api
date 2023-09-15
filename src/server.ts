import { fastify } from "fastify";
import { getAllPromtsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";

const app = fastify()

app.register(getAllPromtsRoute)
app.register(uploadVideoRoute)

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP server running!')
})