import { describe, expect, it } from 'vitest';
import { sayHello } from '../say-hello.js';

describe(sayHello.name, () => {
  it('should say hello', () => {
    expect(sayHello()).toBe('Hello, World!');
  });

  it('should say hello with optional message', () => {
    expect(sayHello('Dan')).toBe('Hello, Dan!');
  });
});
