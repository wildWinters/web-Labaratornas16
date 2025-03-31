const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
console.log(salt);
const hashedPassword = bcrypt.hashSync('myPassword123', salt);
