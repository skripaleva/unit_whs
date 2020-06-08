const { meanMode } = require('./meanMode');

test('Тест1', () => {
    expect(meanMode([1])).toBeTruthy();
});
test('Тест2', () => {
    expect(meanMode([4, 4, 4, 6, 2])).toBeTruthy();
});
test('Тест3', () => {
    expect(meanMode([1, 2, 3])).toBeFalsy();
});
test('Тест4', () => {
    expect(meanMode([1, 1, 1, 2, 5])).toBeFalsy();
});
test('Тест5', () => {
    expect(meanMode([])).toBeFalsy();
});

