const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let avtorShema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    lasteName: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});
let User = mongoose.model('User', avtorShema);
module.exports = User;