import { ORPCError, os } from "@orpc/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";

const base = os.$route({
  method: "POST",
  inputStructure: "detailed",
  outputStructure: "detailed",
});

const pub = base.use(async ({ next }) => {
  return next({
    context: {
      headers: await headers(),
      cookies: await cookies(),
    },
  });
});

const router = base.router.bind(base);

const priv = pub.use(async ({ context, next }) => {
  const { cookies } = context;

  const sessionToken = cookies.get("session")?.value;
  if (!sessionToken) throw new ORPCError("Unauthorized");

  const auth = { user: { id: "123" } };
  if (!auth) throw new ORPCError("Unauthorized");

  return next({
    context: {
      ...context,
      auth,
    },
  });
});

export { pub, priv, router };
