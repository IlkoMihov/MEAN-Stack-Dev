const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function (req, res, next) {
       const options = { method: 'GET',
            url: 'http://apilayer.net/api/live',
            qs:
                { access_key: '707d4d2111a1976c7c4bbd767a9bf3a6',
                    currencies: 'EUR,%20GBP,JPY',
                    format: '0' },
            headers:
                { 'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'gzip, deflate',
                    Host: 'apilayer.net',
                    'Postman-Token': 'b7eaae20-6aaf-4e90-8f12-0158aa49e552,ca553de2-15e1-45eb-899c-36d81e3ac7ec',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'User-Agent': 'PostmanRuntime/7.13.0',
                    'Content-Type': 'application/x-www-form-urlencoded' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            console.log(body);
            res.render('fx', JSON.parse(body));
        });



    }

)
module.exports = router;
