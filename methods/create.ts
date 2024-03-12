import { createMethod } from 'meteor/zodern:relay';
import { z } from 'zod';

export const add = createMethod({
  name: 'add',
  schema: z.number().array().length(2),
  run([a, b]) {
    return a + b;
  },
});