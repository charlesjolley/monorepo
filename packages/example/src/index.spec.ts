import { hello } from "./index";

describe("index", () => {
  it("should export", () => {
    expect(hello).toBe("world");
  });
});
