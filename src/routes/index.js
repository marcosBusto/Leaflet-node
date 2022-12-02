const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/map', (req, res) => {
    res.render('map');
});

router.get('/signin', (req, res) => {
    res.render('signin');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;