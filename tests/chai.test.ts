import { assert, expect, describe, it } from "vitest";

const sayHello = (name: string): string => `Hello ${name}`;

describe("sayHello", () => {
  it("should return with name", () => {
    expect(sayHello("Farden")).to.be.a("string", "berhasil");
    expect(sayHello("Farden")).toBe("Hello Farden");
    assert(sayHello("Farden"), "berhasil");
  });
});
