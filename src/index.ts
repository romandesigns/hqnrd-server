import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => {
  return "Hello Elysia";
});

app.listen(3000, () => {
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
});
