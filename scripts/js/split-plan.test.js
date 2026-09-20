const test = require('node:test');
const assert = require('node:assert');
const {splitPlan} = require('./split-string.js');

test('returns a single part when it fits', () => {
    const parts = splitPlan('Unchanged.', 10)
    assert.strictEqual(parts.length, 1);
})

test('splits string if longer than maxLength', () => {
    let parts = splitPlan('Unchanged.', 9)
    assert.strictEqual(parts.length, 2);

    parts = splitPlan('Unchanged.', 5)
    assert.strictEqual(parts.length, 2);

    parts = splitPlan('Unchanged.', 4)
    assert.strictEqual(parts.length, 3);
})

test('splitting respects newline when possible', () => {
    const string = "aa\nbb\ncccccc\ndddddddd";

    let parts = splitPlan(string, 7);
    assert.strictEqual(parts.length, 4);
    assert.deepStrictEqual(parts, [
        "aa\nbb",
        "cccccc",
        "ddddddd",
        "d"
    ]);
})