var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'AngularSolarExplorer Troendle'
    });
});

router.get('/:id', function(req, res, nest) {
    'use strict';
    res.render(req.params.id, {
        title: ' Solar Explorer Troendle'
    });
});

module.exports = router;
