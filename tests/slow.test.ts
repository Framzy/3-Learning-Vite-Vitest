import { describe, it, expect } from "vitest";

describe("slow test", () => {
  it("should pass 1", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(1).toBe(1);
    console.log("passed 1");
  });
  it("should pass 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(1).toBe(1);
    console.log("passed 2");
  });
  it("should pass 3", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(1).toBe(1);
    console.log("passed 3");
  });
});

// parallel can run all at the same time so it will be faster
describe("slow test parallel", () => {
  it.concurrent("should pass 1", async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(1).toBe(1);
    console.log("passed 1");
  });
  it.concurrent("should pass 2", async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    expect(1).toBe(1);
    console.log("passed 2");
  });
  it.concurrent("should pass 3", async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(1).toBe(1);
    console.log("passed 3");
  });
});
