var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'AngularSolarExplorer Troendle'
    });
});

router.get('renewables/:id', function(req, res, nest) {
    'use strict';
    res.render('renewables/' + req.params.id, {
        title: ' Angualr Directive  Troendle'
    });
});

router.get('/:id', function(req, res, nest) {
    'use strict';
    res.render(req.params.id, {
        title: ' Angualr Directive  Troendle'
    });
});

module.exports = router;