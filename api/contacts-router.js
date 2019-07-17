const router = require('express').Router();
const Contacts = require('./contacts-model');

// get contacts
router.get('/contacts', (req, res) => {
    Contacts.get()
        .then(contacts => {
            res.status(201).json(contacts)
        })
        .catch(err => {
            res.status(404).json({ message: "Please try again" });
        });
});



router.post('/contacts', (req, res) => {
    const { name, phoneNumber, email } = req.body;
    Contacts.add()
        .then(contacts => {

        })
        .catch(err => {
            res.status(500).json({ message: "We ran into an error retreving the specified request." });
        });
});