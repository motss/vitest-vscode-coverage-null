export function sayHello(msg?: string): string {
  return `Hello, ${msg || 'World'}!`;
}
