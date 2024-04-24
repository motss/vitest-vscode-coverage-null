import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      // enabled: true,
      provider: 'v8',
      all: true,
      clean: true,
      cleanOnRerun: true,
      exclude: ['**/*{benchmarks,tests}*/**', '**/*typ{e,ings}.ts'],
      include: ['packages/**', 'src/**'],
    },
  },
});
