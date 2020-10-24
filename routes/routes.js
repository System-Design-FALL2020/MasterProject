const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.redirect('/Home')
})

router.get('/Home', (req, res) => {
    res.sendFile('/views/home/index.html', { root: 'public'});
})

router.get('/Browse', (req,res) => {
    res.sendFile('/views/browse/browse.html', { root: 'public'});
})

router.get('/Login', (req,res) => {
    res.sendFile('/views/login/login.html', { root: 'public'});
})

module.exports = router;