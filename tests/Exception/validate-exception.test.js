const ValidateException = require('../../src/Exception/validate-exception')
jest.mock('../../src/Exception/validate-exception');

beforeEach(() => {
    ValidateException.mockClear();
});

it('Should be test called the class constructor', () => {
    const exception = new ValidateException();
    expect(ValidateException).toHaveBeenCalledTimes(1);
});