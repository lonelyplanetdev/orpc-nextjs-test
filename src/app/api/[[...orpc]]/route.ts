import { serve } from "@orpc/server/next";
import { ORPCContext } from "@/lib/orpc";
import { OpenAPIHandler } from "@orpc/openapi/next";
import { onError } from "@orpc/server";

import api from "@/backend";

const openAPIHandler = new OpenAPIHandler(api, {
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

export const { GET, POST, PUT, PATCH, DELETE } = serve(openAPIHandler, {
  prefix: "/api",
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
