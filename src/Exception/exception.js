class Exception extends Error {
    constructor(
        error = "Error Generic",
        statusCode = 500
    ) {
        super(error);
        this.statusCode = statusCode
    }
}

module.exports = Exception;