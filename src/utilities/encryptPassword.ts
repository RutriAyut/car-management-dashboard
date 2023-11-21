const bcrypt1 = require("bcryptjs");
const salt1 = 10;

function encryptPassword(pass: string) {
  return new Promise((resolve, reject) => {
    bcrypt1.hash(pass, salt1, (err: Error, passEncrypted: string) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(passEncrypted);
    });
  });
}

module.exports = encryptPassword;
