var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    'use strict';
    res.send('respond with a resource');
});

router.get('/:id', function(request, response, next) {
    'use strict';
    response.render('energy-types/' + request.params.id, {
        title: 'Angular Solar Explorer Troendle'
    });
});

module.exports = router;
