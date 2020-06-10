const { sum } = require('./sum');

test('Граница "x = 0", "y = 0"', () => {
    expect(sum()).toBe(0);
});

test('Граница "x = 1", "y = 0"', () => {
    expect(sum(1)()).toBe(1);
});

test('Граница "x = 1", "y = 1"', () => {
    expect(sum(1)(1)()).toBe(2);
});

test('Граница "x = -1", "y = -1"', () => {
    expect(sum(-1)(-1)()).toBe(-2);
});
