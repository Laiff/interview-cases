import { clone } from "./clone";

describe("`clone` cases", () => {
  const obj1 = {
    a: 1,
    b: [[1], { g: 2 }, 3],
    c: function () {},
    d: {
      e: "string",
      f: true,
      g: 5
    }
  };

  it("should return new outer object", () => {
    const obj2 = clone(obj1);

    expect(obj2).not.toBe(obj1);
    expect(typeof obj2).toBe(typeof obj1);
  });

  it("should return new nested object", () => {
    const obj2 = clone(obj1);

    expect(obj2.b).not.toBe(obj1.b);
    expect(obj2.d).not.toBe(obj1.d);
  });

  it("should allow to work with arrays", () => {
    const obj2 = clone(obj1);

    expect(Array.isArray(obj2.b)).toBeTruthy();
  });

  it("should do not type coalesce", () => {
    const obj2 = clone(0);

    expect(obj2).toBe(0);
  });

  it("should allow to work with root arrays", () => {
    const obj2 = clone(obj1.b);

    expect(Array.isArray(obj2)).toBeTruthy();
  });

  it("should allow to work with null", () => {
    const obj2 = clone(null);

    expect(obj2 === null).toBeTruthy();
  });

  it("should allow to work with functions", () => {
    const obj2 = clone(obj1);

    expect(obj2.c).toBe(obj1.c);
  });

  it("should allow change `string` keys", () => {
    const obj2 = clone(obj1);

    obj2.d.e = "new string";

    expect(obj2.d.e).not.toBe(obj1.d.e);

    expect(obj1.d.e).toBe("string");
    expect(obj2.d.e).toBe("new string");
  });

  it("should allow change `number` keys", () => {
    const obj2 = clone(obj1);

    obj2.d.g = 6;

    expect(obj2.d.g).not.toBe(obj1.d.g);

    expect(obj1.d.g).toBe(5);
    expect(obj2.d.g).toBe(6);
  });

  it("should clone nested objects", () => {
    const obj2 = clone(obj1);

    expect(obj1.b[1]).not.toBe(obj2.b[1]);
  });
});
