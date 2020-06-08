const { sum } = require('./sum');

test('Тест1', () => {
    expect(sum()).toBe(0);
});
test('Тест2', () => {
    expect(sum(1)(2)()).toBe(3);
});
test('Тест3', () => {
    expect(sum(1)(2)(3)()).toBe(6);
});