import { pub, router } from "@/lib/server/orpc";
import { z } from "zod";

export default router({
  name: pub
    .input(z.object({ body: z.object({ name: z.string() }) }))
    .output(z.object({ body: z.object({ greeting: z.string() }) }))
    .handler(({ input, context }) => {
      context.resHeaders?.set("Set-Cookie", `name=${input.body.name}`);
      return {
        body: { greeting: `greetings ${input.body.name}` },
      };
    }),
});
