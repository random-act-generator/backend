const router = require('express').Router();
const Services = require('./services-model.js');

// get contacts
router.get('/services', (req, res) => {
    Services.get()
        .then(services => {
            res.status(201).json(services);
        })
        
        .catch(err => {
            res.status(404).json({ message: "Please try again" });
        });
});

// post contacts
router.post('/services', (req, res) => {
    let newService = req.body;

    Services.add(newService)
        .then(service => {
            res.status(201).json(service);
        })
        .catch(err => {
            res.status(404).json(err)
        });
});

// update contacts
router.put('/services/:id', (req, res) => {
    Services.update(req.params.id, req.body)

        .then(updated => {
            res.status(201).json(updated);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

// delete contacts
router.delete('/services/:id', (req, res) => {
    let deleteService = req.params.id;

    Services.remove(deleteService)
        .then(deleted => {
            res.status(201).json(deleted);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});

module.exports = router;
