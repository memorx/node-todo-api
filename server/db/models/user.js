var mongoose = require('mongoose');


// User schema
// property email
// validators: required, trimmed, type string, set min lenght 1
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};