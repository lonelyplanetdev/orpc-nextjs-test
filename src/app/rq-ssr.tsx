import { orpcQueryUtils } from "@/lib/client/orpc-query-utils";
import { dehydrate, QueryClient, HydrationBoundary } from "@tanstack/react-query";
import { api } from "@/backend";
import { CSRTest } from "./rq-csr";

export const SSRTest = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: orpcQueryUtils.greeting.name.queryOptions({
      input: { body: { name: "john" } },
    }).queryKey,
    queryFn: () =>
      api.greeting.name({
        body: { name: "john" },
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CSRTest />
    </HydrationBoundary>
  );
};
