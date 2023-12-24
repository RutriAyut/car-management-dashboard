"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt1 = require('bcryptjs');
const salt1 = 10;
function encryptPassword(pass) {
    return new Promise((resolve, reject) => {
        bcrypt1.hash(pass, salt1, (err, passEncrypted) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(passEncrypted);
        });
    });
}
module.exports = encryptPassword;
