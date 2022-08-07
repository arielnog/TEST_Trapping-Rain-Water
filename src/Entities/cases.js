const ValidateException = require("../Exception/validate-exception");

class Cases {
    constructor(repetion) {
        this.repetion = this.validate(repetion);
    }

     getRepetion(){
        return this.repetion;
    }

   validate(value) {
        let regex = new RegExp("/^[0-9]$/")

        if (!((value >= 1) && (value <= 100))) {
            throw new ValidateException
        }

        if ((regex.test(value))) {
            throw new ValidateException("Não existe somente números")
        }

        return value
    }
}

module.exports = Cases