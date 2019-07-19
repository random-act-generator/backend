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

// post contacts
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

// update contacts: put updates but getting a 404 still
router.put('/contacts/:id', (req, res) => {
    Contacts.update(req.params.id, req.body)

        .then(updated => {
            res.status(201).json(updated);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

// delete contacts
router.delete('/contacts/:id', (req, res) => {
    let deleteContact = req.params.id;

    Contacts.remove(deleteContact)
        .then(deleted => {
            res.status(201).json(deleted);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

module.exports = router;
