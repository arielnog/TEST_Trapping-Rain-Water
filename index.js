const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
const LogHelper = require('./src/Helpers/LogHelper');

(async () => {
    LogHelper.info("[Step - 1] Iniciando o ScannerClient.");
    readline.question(`What's your name?`, name => {
        console.log(`Hi ${name}!`);
        readline.close();
      });
})();











