"use client";

import * as React from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 15 * 1000,
          },
        },
      })
  );
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
