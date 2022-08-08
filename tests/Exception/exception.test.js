const Exception = require('../../src/Exception/exception')
jest.mock('../../src/Exception/exception');

beforeEach(() => {
    Exception.mockClear();
});

it('Should be test called the class constructor', () => {
    const exception = new Exception();
    expect(Exception).toHaveBeenCalledTimes(1);
});