"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcryptjs');
function checkPassword(pass, passEncrypted) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(pass, passEncrypted, (err, isPassCorrect) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(isPassCorrect);
        });
    });
}
module.exports = checkPassword;
