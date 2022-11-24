const calc = require('./calc')

test("add 1 + 2 to be equal 3", () => {
    expect(calc.sum(1,2)).toBe(3);
})

test("3 - 2 to be equal 1", () => {
    expect(calc.sub(3,2)).toBe(1);
})

test("3 * 2 to be equal 6", () => {
    expect(calc.times(3,2)).toBe(6);
})

test("3 ^ 2 to be equal 9", () => {
    expect(calc.squared(3)).toBe(9);
})

