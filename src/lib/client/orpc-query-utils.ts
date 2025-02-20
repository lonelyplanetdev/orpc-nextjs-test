import { createORPCReactQueryUtils } from "@orpc/react-query";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { RouterClient } from "@orpc/server";

import type APIRouter from "@/backend";

const rpcLink = new RPCLink({
  // url: "/rpc", // doesnt work
  url: "http://localhost:3001/rpc", // works
});

const client: RouterClient<typeof APIRouter> = createORPCClient(rpcLink);
const orpcQueryUtils = createORPCReactQueryUtils(client);

export { client, orpcQueryUtils };
