// node --experimental-strip-types src/math.test.ts 🤩
import { test } from "node:test";
import assert from "node:assert/strict";

function add(a: number, b: number) {
	return a + b;
}

function subtract(a: number, b: number) {
	return a - b;
}

test("add", () => {
	assert.equal(add(1, 2), 3);
	assert.equal(add(2, 2), 4);
});

test("subtract", () => {
	assert.equal(subtract(2, 1), 1);
	assert.equal(subtract(2, 2), 0);
});
