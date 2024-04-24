import { describe, expect, it } from 'vitest';

import { addOne } from '../add-one.js';

describe(addOne.name, () => {
  it.each<number>(Array.from({ length: 17 }))('adds one correctly', (n) => {
    expect(addOne(n)).toBe(1 + n);
  });
});
