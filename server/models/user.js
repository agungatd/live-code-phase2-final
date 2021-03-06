let mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let User = new Schema(
  {
    username:{ type: String, required: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: { type: String, required: true, minlength: 6 }
  

  }, 
  {
    timestamps: true
}
);


User.plugin(uniqueValidator, { message: 'email must be unique' });



module.exports = mongoose.model('User', User);