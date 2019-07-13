const router = require('express').Router();
const Users = require('./user-model.js');

const restricted = require('./restricted-middleware.js');

router.get('/users', restricted, (req, res) => {
    Users.get()
        .then(users => {
            res.json({ users, decodedToken: req.decodedToken });
        })
        .catch(error => {
            //res.status(500).json({ error: "We ran into an error retreving the specified request.", error });
            res.send(error);
        });
});

module.exports = router;
