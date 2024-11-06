import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!, Deployed on ignite.dev");
});

export default app;
