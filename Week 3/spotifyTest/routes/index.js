//Weather data from https://developer.here.com/api-explorer/rest/auto_weather/weather-observation
const request = require("request-promise-lite");
const express = require('express');
const router = express.Router();

router.get('/wx', function (req, res, next) {
    const options = {
        method: 'GET',
        url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
        qs:
            {
                product: 'observation',
                name: 'Boston',
                app_id: 'QQNoBy0zpJJBtimPJbfE',
                app_code: 'Y_nSpy4wS4MCX_BRfJSRNg'
            }
    };

    request.get(options.url, options)
        .then((response) => {
            console.log(`REsp: ${response}`);
            res.send(JSON.parse(response));
        });

});

module.exports = router;
