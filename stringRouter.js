const express = require('express')
const stringRouter = express.Router()

const bodyParser = require('body-parser')

let data = {string: 'Assignment #3, CS 591 Perry Donham'}

// parse application/x-www-form-urlencoded
stringRouter.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
stringRouter.use(bodyParser.json())

stringRouter.get('/', (req, res, next) =>{
    res.render('index', {message: data})
})

stringRouter.post('/', (req, res, next)=>{
    data['string'] = req.body.string
    let response = {originalString: data['string'], length: data['string'].length}
    res.render('index', {message: response})
})

module.exports = stringRouter
