const { getMinMax } = require('./getMinMax');

test('Тест1', () => {
    expect(getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028')).toStrictEqual({ min: -1028, max: 15 });
});

test('Тест2', () => {
    expect(getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')).toStrictEqual({ max: Infinity, min: 4 });
});