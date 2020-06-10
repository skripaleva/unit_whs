const { passwordCheck } = require('./passwordCheck');

test('Граница "Ни одно из условий не соблюдено"', () => {
    expect(passwordCheck('password')).toBeFalsy();
});

test('Граница "Соблюдено одно из условий: наличие числа"', () => {
    expect(passwordCheck('password1')).toBeFalsy();
});

test('Значение рядом с границей "Соблюдено одно из условий: наличие двух букв латинского алфавита в разных регистраха"', () => {
    expect(passwordCheck('Password')).toBeFalsy();
});

test('Значение рядом с границей "Соблюдено одно из условий: один символ из ряда ! ? . , + - * / ="', () => {
    expect(passwordCheck('password!')).toBeFalsy();
});

test('Значение рядом с границей "Соблюдено одно из условий: содержит не менее 10 символов"', () => {
    expect(passwordCheck('passworddd')).toBeFalsy();
});

test('Граница "Соблюдены все условия: наличие числа"', () => {
    expect(passwordCheck('This is the 7th password I have come up with!')).toBeTruthy();
});