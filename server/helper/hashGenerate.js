const bcrypt = require('bcryptjs');
function hash(pass) {
    let password = pass
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt); 
    return hash
}

module.exports = hash
