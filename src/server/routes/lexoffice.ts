import { Hono } from "hono"
import { getLexofficeClient } from "../lib/clients.js"

const app = new Hono()

app.get("/profile", async (c) => {
  const data = await getLexofficeClient().get("/v1/profile")
  return c.json(data)
})

export default app
