var express = require('express');
var router = express.Router();

var Product = require('../schema/ProductSchema');

router.get('/', function (req, res, next) {
    Product.find({}, function (err, obj) {
        if (err) {
            return res.status(500).send({ err: "database error" });
        }
        else {
            return res.status(200).send(obj);
        }
    })
})

router.get('/best', function (req, res, next) {
    Product.find({}, 'name imagesource', { limit: 3 }, function (err, obj) {
        if (err) {
            return res.status(500).send({ err: "database error" });
        }
        else {
            return res.status(200).send(obj);
        }
    })
})

module.exports = router;