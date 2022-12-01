const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/map', (req, res) => {
    res.render('map');
});

module.exports = router;