import { describe, it, expect, vi } from 'vitest';

describe('main', () => {
  it('runs correctly', async () => {
    const debug = vi.spyOn(console, 'debug');

    await vi.importActual('../main.js');

    expect(debug).nthCalledWith(1, 'Hello, World!');
  });
});
