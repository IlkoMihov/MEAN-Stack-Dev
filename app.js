const express = require('express')
const app = express()

const PORT = 4000

const stringRouter = require('./stringRouter.js')

app.set('view engine', 'pug')

app.use('/stringRouter', stringRouter)

app.listen(PORT, () =>{
    console.log(`Express applicaton listening on port ${PORT}`)
})