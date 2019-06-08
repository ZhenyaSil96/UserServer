const http = require('http');
const express = require('express');
const User = require('./User');



const cors = require('cors');
let contacts = [
    {
        id: 1,
        first_name: "Alex",
        laste_name: "Busmil",
        email: "bushmil@gmail.com",
        password: "12345"

    }
];
module.exports = contacts;
module.exports = User;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/api/User', function (req, res) {
    User.find((err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
    User.find({ name: "Bob", laste_name: "Bobrush", email: "bobrush@gmail.com", password: "2008" }, (err, doc) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
});
app.get('/api/contacts', function (req, res) {
    if (!contacts) {
        res.status(404).json({ message: 'No contact found' });
    }
    res.json(contacts);
});

app.get('/api/contacts/:id', function (req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact found' });
    }
    res.json(contact[0]);
});

app.get('/api/contacts/:first_name', function (req, res) {
    const reqName = req.params.first_name;
    let contact = contacts.filter(contact => {
        return contact.first_name == reqName;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Name found' });
    }
    res.json(contact[0]);
});

app.get('/api/contacts/:laste_name', function (req, res) {
    const reqLasteName = req.params.laste_name;
    let contact = contacts.filter(contact => {
        return contact.laste_name == reqLasteName;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Laste Name found' });
    }
    res.json(contact[0]);
});

app.get('/api/contacts/:email', function (req, res) {
    const reqEmail = req.params.email;
    let contact = contacts.filter(contact => {
        return contact.email == reqEmail;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Email found' });
    }
    res.json(contact[0]);
});



app.post('/api/contacts', function (req, res) {
    let contact = {
        id: contacts.length + 1,
        first_name: req.body.first_name,
        laste_name: req.body.laste_name,
        email: req.body.email,
        password: req.body.password
    }

    contacts.push(contact);
    res.json(contact);
});
app.post('/api/User', function (req, res) {
    const User = new Users(req.body);
    User.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(User);
    });
});



app.put('/api/contacts/:id', function (req, res) {
    const reqId = req.params.id;

    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];

    const index = contacts.indexOf(contact);
    const keys = Object.keys(req.body);

    keys.forEach(key => {
        contact[key] = req.body[key];
    });
    contacts[index] = contact;

    res.json(contacts[index]);
});
app.put('/api/User', function (res, req) {
    User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true },
        (err, userId) => {

            if (err) return res.status(500).send(err);
            return res.send(userId);
        }
    );
});


app.delete('/api/contacts/:id', function (req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    res.json({ message: `User ${reqId} deleted.` });

});
app.delete('api/User', function (res, req) {
    User.findByIdAndRemove(req.params.userId, (err, user) => {

        if (err) return res.status(500).send(err);
        const response = {
            message: " successfully deleted",
            id: user._id
        };
        return res.status(200).send(response);
    });
});


app.listen(8080, (err) => {
    if (err) return console.log('Error', err);
    console.log('We track the port = 8080');

    // mongoose.connect(mongodb, function (err) {
    //     if (err) throw err;

    //     console.log('Successfully connected');
    // });
});