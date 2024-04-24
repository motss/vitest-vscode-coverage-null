import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  'packages/*',
  {
    extends: './vite.config.ts',
    test: {
      clearMocks: true,
      environment: 'node',
      include: ['*tests*/**/*.test.ts'],
      name: 'node',
    },
  },
]);
