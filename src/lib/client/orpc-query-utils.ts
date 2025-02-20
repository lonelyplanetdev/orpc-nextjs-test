import { createORPCReactQueryUtils } from "@orpc/react-query";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { RouterClient } from "@orpc/server";

import type APIRouter from "@/backend";

const rpcLink = new RPCLink({
  url: "/rpc",
});

const client: RouterClient<typeof APIRouter> = createORPCClient(rpcLink);

export const orpcQueryUtils = createORPCReactQueryUtils(client);
