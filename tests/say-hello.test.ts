import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello.ts";

describe("say hello", () => {
  it("should return hello with name", () => {
    const result = sayHello("Farden");
    expect(result).toBe("Hello Farden");
  });
});
