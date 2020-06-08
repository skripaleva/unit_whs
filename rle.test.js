const { rle } = require('./rle');

test('Тест1', () => {
    expect(rle('AAAB')).toBe('A3B');
});
test('Тест2', () => {
    expect(rle('BCCDDDEEEE')).toBe('BC2D3E4');
});