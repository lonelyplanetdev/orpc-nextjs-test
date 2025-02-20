'use client';

import { orpcQueryUtils } from '@/lib/client/orpc-query-utils';
import { useQuery } from '@tanstack/react-query';

export const CSRTest = () => {
  const { data } = useQuery(
    orpcQueryUtils.greeting.name.queryOptions({
      input: { body: { name: 'john' } },
    })
  );
  return <div>{data?.body.greeting}</div>;
};
