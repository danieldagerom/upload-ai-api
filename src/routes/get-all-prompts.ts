import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromtsRoute(app: FastifyInstance) {
    app.get('/prompts', async () => {
        const prompts = await prisma.promt.findMany()
    
        return prompts
    })
}