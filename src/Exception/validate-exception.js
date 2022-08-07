const Exception = require("./exception");

class ValidateException extends Exception
{
    constructor(error)
    {
        error = error || 'Error Validate';
        super(error);
    }
}

module.exports = ValidateException;