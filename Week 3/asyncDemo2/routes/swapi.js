var express = require('express');
var router = express.Router();
const request = require('request-promise-lite');


/* GET users listing. */
router.get('/', function (req, res, next) {

    request.get('https://swapi.co/api/starships/9/?format=json')
        .then((response => {
            const parsed = JSON.parse(response);
            console.log(`Got ${parsed}`);
            console.log(`Name: ${parsed.name}`);
            res.send(JSON.parse(response));

        }));

});

router.route('/')

    .get(function (req, res, next) {

    })
    .post(function (req, res, next) {

    });

module.exports = router;
