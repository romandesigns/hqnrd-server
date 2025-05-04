import { Elysia } from "elysia";
import { ConvexClient } from "convex/browser";
import { api } from "../convex/_generated/api.js";

const app = new Elysia();
const { log } = console;

app.get("/", async () => {
  const client = new ConvexClient(Bun.env.CONVEX_URL!);
  const tasks = await client.query(api.tasks.getTasks, {});
  return tasks;
});

app.listen(3000, () =>
  log(`🦊 App running at ${app.server?.hostname}:${app.server?.port}`)
);
