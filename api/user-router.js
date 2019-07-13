const router = require('express').Router();
const Users = require('./user-model.js');

const restricted = require('./restricted-middleware.js');

router.get('/users', restricted, (req, res) => {
    Users.get()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.send(err)
        });
});

module.exports = router;
