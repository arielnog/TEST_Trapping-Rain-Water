const Waterbox = require("../Entities/waterbox");

class CalculateService {

   static async calculate(width, height) {
       const waterbox = new Waterbox(width, height);

        if (waterbox.invalid) {
            return 0
        }

        let leftSide = 0;
        let rightSide = waterbox.height.length - 1;
        let leftPivot = waterbox.height[leftSide];
        let rightPivot = waterbox.height[rightSide];

        while (leftSide < rightSide) {
            if (waterbox.height[leftSide] <= waterbox.height[rightSide]) {
                leftSide++;
                leftPivot = Math.max(leftPivot, waterbox.height[leftSide])
                waterbox.increaseCapacity(leftPivot, waterbox.height[leftSide])
            } else {
                rightSide--;
                rightPivot = Math.max(rightPivot, waterbox.height[rightSide])
                waterbox.increaseCapacity(rightPivot, waterbox.height[rightSide])
            }
        }

        return waterbox.capacity
    }
}

module.exports = CalculateService