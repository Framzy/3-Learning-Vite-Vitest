import { bench, describe, expect, it } from "vitest";

describe("hello", () => {
  function sayHello(name: string): string {
    return `Hello ${name}`;
  }

  bench("hello", () => {
    const result = sayHello("Farden");
    expect(result).toBe("Hello Farden");
  });

  //   it("should say hello", () => {
  //     expect(sayHello("Farden")).toBe("Hello Farden");
  //   });
});
