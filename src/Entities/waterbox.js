const LogHelper = require("../Helpers/log-helper");

class Waterbox {
    constructor(width, height) {
        this.width = width;
        this.height = this.splitHeight(height);
        this.invalid = this.validate(this.width,this.height) ?? false
        this.capacity = 0;
    }

    validate(width, height) {
        if (height === 0){
            return true;
        }

        if (width !== height.length) {
            LogHelper.error("A uma diferença nos valores informados com o comprimento da caixa d'agua")
            return true
        }
    }

    splitHeight(string) {
        const regex = new RegExp('^[\\d ]*$')

        if (!regex.test(string)) {
            LogHelper.error("Valores invalidos para a altura da caixa d'agua!")
            return 0
        }

        return string.split(' ')
    }

    increaseCapacity(pivotValue, value) {
        this.capacity += (pivotValue - value)
    }
}

module.exports = Waterbox