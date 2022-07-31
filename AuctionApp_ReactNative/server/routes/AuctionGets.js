var express = require('express');
var router = express.Router();

var Auction = require('../schema/AuctionSchema');

router.get('/', function (req, res, next) {
    Auction.find({}, function (err, obj) {
        if (err) {
            return res.status(500).send({ err: "database error" });
        }
        else {
            console.log(obj)
            return res.status(200).send(obj);
        }
    })
})

router.get('/best', function (req, res, next) {
    Auction.find({}, 'name imagesource', { limit: 3 }, function (err, obj) {
        if (err) {
            return res.status(500).send({ err: "database error" });
        }
        else {
            return res.status(200).send(obj);
        }
    })
})

module.exports = router;