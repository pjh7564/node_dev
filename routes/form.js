var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form', {
        name: 'park',
        blog : 'jh-park.tistory.com',
        homepage: 'nope'
    });
});

router.post('/', function(req, res, next) {
    res.json(req.body);
})

module.exports = router;