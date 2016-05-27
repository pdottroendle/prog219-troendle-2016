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


router.get('/renewablesByYear/:id', function (request, response) {
    'use strict';
    console.log('Renewables By Year called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);

            for (var i = 0; i < json.length; i++) {
                if (json[i].Year === request.params.id ) {
                    console.log(json[i].Year);
                    response.send({
                        result: 'Success',
                        renewables: json[i]
                    });
                    return;
                }
            }

            response.send({
                result: 'Failure',
                renewables: null
            });
        }
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