import { expect, test } from "bun:test";

// pass
test("1 + 1", () => {
    expect(1 + 1).toBe(2);
});

// tail
test("1 + 2", () => {
    expect(1 + 2).toBe(4);
});
