const mongoose = require('mongoose');
let Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/serverdb');

let authorShema = new Schema({
    name: String,
    lasteName: String,
    email: String,
    password: Number,
});
let User = mongoose.model('User', authorShema);

User.create({ name: "Alex", lasteName: "Alixac", email: "alixac@gmail.com", password: 005 }, function (err, doc) {
    if (err) return console.log(err);

    console.log("Save object user", doc);
});
User.create({ name: "Jorsh", lasteName: "Abromovich", email: "abrom@gmail.com", password: 972 }, function (err, doc) {
    if (err) return console.log(err);
    console.log("Save Jorsh", doc);
});
User.findOne({ name: "Jorsh", lasteName: "Abromovich", email: "abrom@gmail.com", password: 972 }, function (err, docs) {
    if (err) return console.log(err);
    console.log(docs);
});

let id = "5ceae6a38b80cf2275c42a59";
User.findByIdAndDelete(id, function (err, doc) {
    if (err) return console.log(err);
    console.log("Delete User ", doc);
});


module.exports = User;
