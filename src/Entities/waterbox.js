class Waterbox {
    constructor(width, height) {
        this.width = width;
        this.height = this.splitHeight(height);
        this.invalid = this.validate(this.width,this.height)
        this.capacity = 0;
    }

    validate(width, height) {
        if (width !== height.length) {
            LogHelper.error("A uma diferença no tamanho do ")
            return true
        }
    }

    splitHeight(string) {
        const regex = new RegExp('^[\\d ]*$')

        if (!regex.test(string)) {
            return 0
        }

        return string.split(' ')
    }

    increaseCapacity(pivotValue, value) {
        this.capacity += (pivotValue - value)
    }
}

module.exports = Waterbox