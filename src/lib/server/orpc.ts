import { ORPCError, os } from "@orpc/server";
import { type ORPCContext } from "@/lib/orpc";

const base = os.$context<ORPCContext>().$route({
  method: "POST",
  inputStructure: "detailed", // change default input structure to detailed
  outputStructure: "detailed",
});
const pub = base;

const priv = base.use(async ({ context, next }) => {
  const { auth } = context;
  if (!auth) throw new ORPCError("UNAUTHORIZED");

  return next();
});

export { pub, priv };
