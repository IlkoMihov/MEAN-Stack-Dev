const express = require('express')
const router = express.Router()

const request = require('request-promise-lite')
const configs = require('../config/spotify')


router.route('/sp', function (req, res, next)  {
    var request = require("request");

    var options = { method: 'GET',
//        url: 'https://api.spotify.com/v1/albums',
        url: configs.url,
        qs:
            { ids: '382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc',
                market: 'ES' },
        headers:
            {
            Authorization: 'Bearer BQBv28GxHtlSKjOZcZ9_WV6-CUK9kM5uk8-DDWG8jq0rhgIpAB_SFa7LG5fSJV8z1f2Ahn7mh8_aKfN-XWF2BJaQJVR9f1ZHqWmRGqvD3FKD_CtDsl8HeA8CT0wB1BnIR6gfhy9wi5q29A' } };

    request(options)
        .then((result) => {
            console.log(result);
            res.send(result);
        })
})

module.exports = router
