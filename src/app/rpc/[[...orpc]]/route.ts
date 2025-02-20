import { serve, RPCHandler } from "@orpc/server/next";
import { onError } from "@orpc/server";

import api from "@/backend";

const rpcHandler = new RPCHandler(api, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export const { GET, POST, PUT, PATCH, DELETE } = serve(rpcHandler, {
  prefix: "/rpc",
});
