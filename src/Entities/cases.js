const ValidateException = require("../Exception/validate-exception");

class Cases {
    constructor(repetition) {
        this.repetition = this.validate(repetition);
    }

    validate(value) {
        let regex = new RegExp("/^[0-9]$/")

        if ((regex.test(value))) {
            throw new ValidateException("Não existe somente números.")
        }

        if (!((value >= 1) && (value <= 100))) {
            throw new ValidateException("Número não está dentro do permitido.")
        }

        return value
    }
}

module.exports = Cases