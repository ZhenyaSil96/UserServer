const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
let User = require('./avtor');
let mongodb = ('localhost://8080/datadb/db');

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
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/avtor', function (req, res) {
    if (!User) {
        res.status(404).json({ message: 'No User found' });
    }
    res.json(User);
});
app.get('/api.avtor/:id', function (res, req) {
    const reqId = req.params.id;
    let contact = User.filter(contact => {
        return contact.id == reqId;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact found' });
    }
    res.json(contact[0]);
});
app.get('api/avtor/:name', function (res, req) {
    const reqName = req.params.name;
    let contact = User.filter(contact => {
        return contact.name == reqName;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact Name found' });
    }
    res.json(contact[0]);
});

app.get('api/avtor/:lasteName', function (res, req) {
    const reqlaste_Name = req.params.lasteName;
    let contact = User.filter(contact => {
        return contact.lasteName == reqlaste_Name;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact LasteName found' });
    }
    res.json(contact[0]);
});

app.get('api/avtor/:email', function (res, req) {
    const reqEmails = req.params.email;
    let contact = User.filter(contact => {
        return contact.email == reqEmails;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact LasteName found' });
    }
    res.json(contact[0]);
});

app.get('api/avtor/:password', function (res, req) {
    const reqPasswords = req.params.password;
    let contact = User.filter(contact => {
        return contact.password == reqPasswords;
    });
    if (!contact) {
        res.status(404).json({ message: 'No contact LasteName found' });
    }
    res.json(contact[0]);
});

app.post('/api/avtor', function (req, res) {
    let contact = {
        id: User.length + 1,
        name: req.body.name,
        lasteName: req.body.lasteName,
        email: req.body.email,
        password: req.body.password
    }

    contacts.push(contact);
    res.json(contact);
});
app.put('/api/avtor/:id', function (req, res) {
    const reqId = req.params.id;

    let contact = User.filter(contact => {
        return contact.id == reqId;
    })[0];

    const index = User.indexOf(contact);
    const keys = Object.keys(req.body);

    keys.forEach(key => {
        contact[key] = req.body[key];
    });
    User[index] = contact;

    res.json(User[index]);
});

app.delete('/api/avtor/:id', function (req, res) {
    const reqId = req.params.id;
    let contact = User.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = User.indexOf(contact);
    User.splice(index, 1);
    res.json({ message: `User ${reqId} deleted.` });

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

app.delete('/api/contacts/:id', function (req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    res.json({ message: `User ${reqId} deleted.` });

});

app.listen(8080, (err) => {
    if (err) return console.log('Error', err);
    console.log('We track the port = 8080');

    mongoose.connect(mongodb, function (err) {
        if (err) throw err;

        console.log('Successfully connected');
    });
});