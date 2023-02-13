import { sum } from "./sum";

describe("`sum` cases", () => {
  it("should support only one call", () => {
    expect(sum()).toBe(undefined);
  });
  it("should support infinite chain call", () => {
    expect(typeof sum(1)(2)).toBe("function");
  });
  it("should support exit from chain call", () => {
    expect(sum(1)()).toBe(1);
  });
  it("should support sum chain call", () => {
    expect(sum(1)(2)(3)(4)()).toBe(10);
  });
});
