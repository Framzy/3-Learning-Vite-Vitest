import { describe, it, expect } from "vitest";
describe("global", () => {
  it("should pass", () => {
    expect(1).toBe(1);
    console.log("passed");
  });
  it("should pass 2", () => {
    expect(2).toBe(2);
    console.log("passed 2");
  });
  it("should pass 3", () => {
    expect(3).toBe(3);
    console.log("passed 3");
  });
});
