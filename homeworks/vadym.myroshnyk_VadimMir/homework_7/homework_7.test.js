const fib = require('./homework_7');

describe('fibonacci', () => {
    test('check array', () => {
        expect(Array.isArray(fib())).toBe(true);
    });

    test('check 50', () => {
        const array = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        expect(fib(50)).toEqual(array);
    });

    test('check 100', () => {
        const array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
        expect(fib(100)).toEqual(array);
    });
});
