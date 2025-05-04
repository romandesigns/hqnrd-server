import { Elysia } from "elysia";
import { ConvexClient } from "convex/browser";
import { api } from "../convex/_generated/api.js";
import { swagger } from "@elysiajs/swagger";

// App port
const PORT = Bun.env.PORT || 32000;
const { log } = console;
// Initializing Elysia server
const app = new Elysia();
// Swagger documentation
app.use(swagger());

app.get("/api/tasks", async () => {
  const client = new ConvexClient(Bun.env.CONVEX_URL!);
  const tasks = await client.query(api.tasks.getTasks, {});
  return tasks;
});

app.listen(PORT, () =>
  log(`🦊 App running at ${app.server?.hostname}:${app.server?.port}`)
);
