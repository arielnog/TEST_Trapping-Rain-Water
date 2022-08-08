const Cases = require('../../src/Entities/cases')

it('should be called the class with constructor ', function () {
    let repetition = 2

    const cases = new Cases(repetition)
    expect(cases.repetition).toBe(2)
});