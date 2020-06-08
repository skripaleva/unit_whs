const { passwordCheck } = require('./passwordCheck');

test('Тест1', () => {
    expect(passwordCheck('Nagibator777')).toBeFalsy();
});
test('Тест2', () => {
    expect(passwordCheck('password')).toBeFalsy();
});
test('Тест3', () => {
    expect(passwordCheck('This is the 7th password I have come up with!')).toBeTruthy();
});