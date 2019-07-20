const router = require('express').Router();
const Services = require('./services-model.js');

const restricted = require('./restricted-middleware.js');

router.get('/services', restricted, (req, res) => {
    Services.get()
        .then(services => {
            res.json({ services, decodedToken: req.decodedToken });
        })
        .catch(error => {
            //res.status(500).json({ error: "We ran into an error retreving the specified request.", error });
            res.send(error);
        });
});

module.exports = router;