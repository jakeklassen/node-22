import { test } from "node:test";
import assert from "node:assert/strict";

/**
 * @param {number} a
 * @param {number} b
 */
function add(a, b) {
	return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 */
function subtract(a, b) {
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
