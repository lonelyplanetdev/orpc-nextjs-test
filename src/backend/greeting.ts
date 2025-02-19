import { pub } from '@/lib/server/orpc';
import { os } from '@orpc/server';
import { z } from 'zod';

export default pub.router({
  name: os
    .input(z.object({ name: z.string() }))
    .output(z.string())
    .handler(async ({ input }) => {
      return `greetings ${input.name}`;
    }),
  age: pub
    .input(z.object({ age: z.number() }))
    .output(z.string())
    .handler(async ({ input }) => {
      return `woah are you really ${input.age} years old?`;
    }),
});
