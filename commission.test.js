const { commission } = require('./commission');

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

describe('a = 0', () => {
    test('Граница a = 0', () => {
        expect(commission(Date.now() + MILLISECONDS_IN_DAY*0)).toBe(75);
    });
    test('Значение рядом с границей a = -1', () => {
        expect(commission(Date.now() + MILLISECONDS_IN_DAY*-1)).toBe(100);
    });
});


describe('a = 1', () => {
test('Граница a = 1', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*1)).toBe(50);
});
test('Значение рядом с границей a = 2', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*2)).toBe(50);
});
});

describe('a = 5', () => {
test('Граница a = 5', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*5)).toBe(20);
});
test('Значение рядом с границей a = 4', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*4)).toBe(50);
});
test('Значение рядом с границей a = 6', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*5)).toBe(20);
});
});

describe('a = 10', () => {
test('Граница a = 10', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*10)).toBe(0);
});
test('Значение рядом с границей a = 9', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*9)).toBe(20);
});
test('Значение рядом с границей a = 11', () => {
    expect(commission(Date.now() + MILLISECONDS_IN_DAY*11)).toBe(0);
});
});