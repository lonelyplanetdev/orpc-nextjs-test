import { serve, RPCHandler } from "@orpc/server/next";
import { ORPCContext } from "@/lib/orpc";

import api from "@/backend";
import { onError } from "@orpc/server";

const rpcHandler = new RPCHandler(api, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export const { GET, POST, PUT, PATCH, DELETE } = serve(rpcHandler, {
  prefix: "/rpc",
  context: async (req): Promise<ORPCContext> => {
    const headers = req.headers;
    const cookies = req.cookies;

    return {
      auth: null,
      headers,
      cookies,
    };
  },
});
