import { router } from '@/lib/server/orpc';
import { createRouterClient } from '@orpc/server';

// Sub Routers
import greeting from './greeting';

const apiRouter = router({
  greeting,
});

export const api = createRouterClient(apiRouter);
export default apiRouter;
