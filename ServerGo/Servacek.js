const http = require('http');
const express = require('express');
let contacts = [];

const app = express();

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

    res.json(contact[index]);
});

app.delete('/api/contacts/:id', function (req, res) {
    const reqId = req.params.id;
    let contact = contacts.filter(contact => {
        return contact.id == reqId;
    })[0];
    const index = contacts.indexOf(contact);
    contacts.splice(index, 1);
    res.json({ message: 'User ${reqId} delete.' });

});

app.listen(8080, (err) => {
    if (err) return console.log('Error', err);
    console.log('We track the port = 8080');
});