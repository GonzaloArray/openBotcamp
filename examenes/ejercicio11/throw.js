const logger = require("./logger");
logger.error("Hay un error")
const numero = "2";
function numeroError(num) {
    if (typeof num === "number") {
        return num * 2
    }

    throw new Error("Hay un error en el catch")
}
try {
    numeroError(numero)
} catch (e) {
    logger.error("sadfasdf");
    logger.error("Hola computere este error");
}


