const express = require('express');
const router = express.Router();
const http = require('http')

const bodyParser = require('body-parser')

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next()
})
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
router.use(bodyParser.json())

/* GET home page. */
router.get('/', function(req, res, next) {
  getPeopleInfo().then((parsedData)=>{
    res.render('index', {people: parsedData['people']})
  })
      .catch((error) =>{
  console.log(error)})
})


/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(`req.body = ${req.body.name}`)
  postPeopleInfo().then((parsedData)=>{
    parsedData['string'] = req.body.name
    res.json(parsedData)
  })
      .catch((error) =>{
        console.log(error)})
})



const getPeopleInfo = () =>{
  return new Promise ((resolve, reject) => {
    const req = http.get('http://api.open-notify.org/astros.json', (res) => {
      let rawData = []

      res.on('data', (chunk) => {
        rawData.push(chunk)
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(e.message);
        }
      });
      req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
        reject(e.message)
      });
    })})}



const postPeopleInfo = () =>{
  return new Promise ((resolve, reject) => {
    const req = http.get('http://api.open-notify.org/astros.json', (res) => {
      let rawData = []

      res.on('data', (chunk) => {
        rawData.push(chunk)
      });

      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          reject(e.message);
        }
      });
      req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
        reject(e.message)
      });
    })})}

module.exports = router;

