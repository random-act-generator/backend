const router = require('express').Router();
const Contacts = require('./contacts-model.js');

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
    let newContact = req.body;

    Contacts.add(newContact)
        .then(contact => {
            res.status(201).json(contact);
        })
        .catch(err => {
            res.status(404).json(err)
        });
});

module.exports = router;
