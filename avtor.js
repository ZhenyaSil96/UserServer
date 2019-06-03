const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let avtorShema = new Schema({
    name: String,
    lasteName: String,
    email: String,
    password: String,
});
let User = mongoose.model('User', avtorShema);
module.exports = User;