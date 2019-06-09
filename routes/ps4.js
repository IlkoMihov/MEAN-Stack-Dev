var express = require('express');
var router = express.Router();
var http = require('http')


const getPeopleInfo = () =>{
  return new Promise ((resolve, reject) => {
    var req = http.get('http://api.open-notify.org/astros.json', (res) => {
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
const getStationInfo = () =>{
  return new Promise ((resolve, reject) => {
    var req = http.get('http://api.open-notify.org/iss-now.json', (res) => {
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
/* GET home page. */
router.get('/', function(req, res, next) {
  getPeopleInfo().then((parsedData)=>{
    res.render('index', {people: parsedData['people']})
  })
      .catch((error) =>{
  console.log(error)})
})
console.log('After the func')

module.exports = router;

