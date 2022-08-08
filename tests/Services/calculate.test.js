const CalculateService = require('../../src/Service/calculate-service')
const LogHelper = require("../../src/Helpers/log-helper");

it('should be calculate capacity from water box with has water in final ', async () => {
    let width = 5,
        height = "3 2 1 2 3"

    const calculate = await CalculateService.calculate(width,height)
    expect(calculate).toBe(4)
});

it('should be calculate capacity from water box with not has water in final ', async () => {
    let width = 5,
        height = "3 2 1 1 1"

    const calculate = await CalculateService.calculate(width,height)
    expect(calculate).toBe(0)
});

it('should be calculate with send invalid values from height', async () => {
    const logHelperSpy = jest.spyOn(LogHelper,'error')

    let width = 5,
        height = "3 2 1"

    const calculate = await CalculateService.calculate(width,height)
    expect(calculate).toBe(0)
    expect(logHelperSpy).toHaveBeenCalledWith("A uma diferença nos valores informados com o comprimento da caixa d'agua")
});
