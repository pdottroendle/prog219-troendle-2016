var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(request, response, next) {
    'use strict';
    response.render('index', {
        title: 'AngularSolarExplorer Troendle'
    });
});

router.get('/renewables/:id', function(request, response, next) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: ' Angular Directive  Troendle'
    });
});

/*
 router.get('renewables-by-year/:id', function(req, res, nest) {
 'use strict';
 res.render('renewables/renewables-by-year' + req.params.id, {
 title: ' Angular Directive  Troendle'
 });
 });

 router.get('simple-format/:id', function(req, res, nest) {
 'use strict';
 res.render('renewables/simple-format' + req.params.id, {
 title: ' Angular Directive  Troendle'
 });
 });
 */

router.get('/:id', function(request, response, next) {
    'use strict';
    response.render(request.params.id, {
        title: ' Angular Directive Calvert'
    });
});

module.exports = router;
