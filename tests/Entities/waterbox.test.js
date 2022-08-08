const WaterBox = require('../../src/Entities/waterbox')

it('should be get split from string valid', function () {
    let width = 3,
        height = "2 1 3"

    const expected = ["2","1","3"]

    const waterbox = new WaterBox(width,height).splitHeight(height)
    expect(waterbox).toEqual(expect.arrayContaining(expected))
});


it('should be get split from string invalid', function () {
    let width = 3,
        height = "fdafa"

    const expected = 0

    const waterbox = new WaterBox(width,height).splitHeight(height)
    expect(waterbox).toBe(expected)
});

it('should be increase from capacity water', function () {
    let width = 3,
        height = "2 1 3",
        pivotValue = 2,
        value = 1

    const waterbox = new WaterBox(width,height)
    waterbox.increaseCapacity(pivotValue,value)

    expect(waterbox.capacity).toBe(1)
});
