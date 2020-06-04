const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;


describe('Время вылета', () => {
    test('Граница "Время вылета"', () => {
        expect(commission(Date.now())).toBe(75);
    });
    test('Значение рядом с границей "1 сутки после вылета"', () => {
        expect(commission(Date.now() + MILLISECONDS_IN_DAY*-1)).toBe(100);
    });
});


describe('1 сутки до вылета', () => {
test('Граница "1 сутки до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY)).toBe(50);
});
test('Значение рядом с границей "2-е суток после вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*2)).toBe(50);
});
});


describe('5 суток до вылета', () => {
test('Граница "5 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*5)).toBe(20);
});
test('Значение рядом с границей "4 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*4)).toBe(50);
});
test('Значение рядом с границей "6 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*6)).toBe(20);
});
});


describe('10 суток до вылета', () => {
test('Граница "10 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*10)).toBe(0);
});
test('Значение рядом с границей "9 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*9)).toBe(20);
});
test('Значение рядом с границей "11 суток до вылета"', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*11)).toBe(0);
});
});