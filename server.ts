import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { HTML } from "./html.tsx";

const PORT = 3000;
const application = new Application();
const router = new Router();

router.get("/", async ({ response }) => {
  response.body = HTML({
    title: "Deno // React",
    message: "SSR"
  });
});

application.use(router.routes());

application.use(async context => {
  try {
    await send(context, context.request.path, {
      root: `${Deno.cwd()}/static`,
      index: "index.html"
    });
  } catch (e) {
    // handle
  }
});

application.listen(`:${PORT}`);

console.info(`❯❯❯ server listening at localhost:${PORT}`);
