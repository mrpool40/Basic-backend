const fs = require("fs");

function logReqres(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            ` ${Date.now()}: ${req.method}: ${req.path}\n`,
            (err, data) => {
              next();
            }
          );
        };
}

module.exports = {
    logReqres,
}