import { describe, expect, it, vi } from "vitest";
import * as utils from "../utils/utils";

describe("mocking", () => {
  function sayHello(name: string, callback: (message: string) => void) {
    callback(`Hello ${name}`);
  }

  it("should support mock", () => {
    const callback = vi.fn();
    sayHello("Farden", callback);
    expect(callback).toHaveBeenCalledWith("Hello Farden");
  });
});

describe("mocking with return value", () => {
  it("should return mocked value", () => {
    // buat mock function yang mengembalikan nilai
    const getData = vi.fn().mockReturnValue("Mocked Data");

    // panggil mock function
    const result = getData();

    // pastikan hasilnya sesuai mock
    expect(result).toBe("Mocked Data");
    expect(getData).toHaveBeenCalledOnce();
  });
});

describe("mocking with implementation", () => {
  it("should execute custom logic", () => {
    const multiply = vi.fn((a: number, b: number) => a * b);

    expect(multiply(2, 3)).toBe(6);
    expect(multiply).toHaveBeenCalledWith(2, 3);
  });
});

describe("mock call tracking", () => {
  it("should track how many times called", () => {
    const logger = vi.fn();

    logger("first");
    logger("second");
    logger("third");

    expect(logger).toHaveBeenCalledTimes(3);
  });
});

describe("mocking module function", () => {
  it("should mock module function", () => {
    vi.spyOn(utils, "getUserName").mockReturnValue("Mocked User");

    expect(utils.getUserName()).toBe("Mocked User");

    vi.restoreAllMocks(); // kembalikan fungsi ke semula
  });
});
