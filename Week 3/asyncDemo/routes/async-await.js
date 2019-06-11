//async / await
//
const router = require('express').Router()
const request = require('request-promise')
//const request = require('request')

const rates = function () {
    return new Promise((resolve, reject) => {
        try {
            let fx = request('http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&source=USD&currencies=EUR&format=2')
            resolve(fx)
        } catch (err) {
            reject(err)
        }
    })
}

async function ratesAsync() {
    const fx = await request('http://apilayer.net/api/live?access_key=707d4d2111a1976c7c4bbd767a9bf3a6&source=USD&currencies=EUR&format=2')
    return fx
}


router.get('/async', (req, res, next) => {
    ratesAsync()
        .then(function (fx) {
                console.log(`Rate is ${fx}`) //resolve
                res.send(fx)
            },
            (err) => {
                console.log(`${err}`)
                res.send(err);
            }
        )
        .then(() => console.log('All done with async-await call'))

})

router.get('/promise', (req, res, next) => {
    rates()
        .then(fx => {
                console.log(`Rate is ${fx}`) //resolve
                res.send(fx)
            },
            err => {
                console.log(`${err}`)
                res.send(err);
            }
        )
        .finally(_ => console.log(`All done with promises call`))

})

module.exports = router