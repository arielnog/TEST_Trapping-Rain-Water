const fs = require("fs");

class LogHelper {
    static success(message) {
        console.log('\x1b[33m', this.now(), ":\x1b[0m", '\x1b[32m', message, "\x1b[0m");  //cyan
    }

    static error(message) {
        console.log('\x1b[33m', this.now(), ":\x1b[0m", '\x1b[31m', message, "\x1b[0m");  //cyan
    }

    static info(message) {
        console.log('\x1b[33m', this.now(), ":\x1b[0m", '\x1b[36m', message, "\x1b[0m");  //cyan
    }

    static now() {
        const m = new Date();
        return m.toISOString().replace("T", " ").replace("Z", " ");
    }
}


module.exports = LogHelper
