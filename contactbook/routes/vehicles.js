var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all",(req,res)=>{
    db.Car.findAll()
    .then( cars => {
        res.status(200).send(JSON.stringify(cars));
    })
    .catch( err => {
        res.status(500).send(JSON.stringify(err));
    });
});

module.exports = router;
