const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect('');

let authorShema = new Schema({
    id: Number,
    name: String,
    lasteName: String,
    email: String,
    password: String,
});
let User = mongoose.model('User', authorShema);
module.exports = User;