const LogHelper = require('./src/Helpers/log-helper');
const Cases = require("./src/Entities/cases");
const readlineSync = require('readline-sync');
const CalculateService = require("./src/Service/calculate-service");


(async () => {
    LogHelper.info('Iniciando a aplicação...')

    const repetition = readlineSync.questionInt("Quantas vezes executadas o app? -> ");
    const cases = new Cases(repetition);

    for (let i = 0; i < cases.getRepetion(); i++) {
        const width = readlineSync.questionInt("Qual o comprimento da caixa d'agua? -> ");

        if (width <= 2) {
            LogHelper.error("Comprimento da caixa d'agua inválida.")
            continue
        }

        const height = readlineSync.question("Quais as alturas da caixa d'agua? (Insira separadas por spaces) -> ");

        const calculate = await CalculateService.calculate(width, height)

        LogHelper.success("Valores Enviados => " + height + " || Capacidade da caixa d'agua => " + calculate)
    }

    LogHelper.info('Finalizando a aplicação...')
})();











