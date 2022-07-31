var express = require("express");
var router = express.Router();

var Product = require('../schema/ProductSchema');

router.post('/', function (req, res, next) {

    var product = new Product();

    var manufacturer = req.body.MANUFACTURER;
    var name = req.body.NAME;
    var year = req.body.YEAR;
    var imagesource = req.body.IMAGESOURCE;
    var price = req.body.PRICE;

    if (manufacturer == undefined || name == undefined || year == undefined
        || imagesource == undefined || price == undefined) {
        return res.status(400).send({ err: "param is null" })
    }
    else {
        product.manufacturer = manufacturer;
        product.name = name;
        product.year = year;
        product.imagesource = imagesource;
        product.price = price;
        product.imagewonsanji = "";
        product.maintext = "";
        product.subtext1 = "";
        product.subtext2 = "";
        product.subtext3 = "";
        product.subtext4 = "";
        product.utong = "";
        product.certimage = "";

        product.save(function (err) {
            console.log(err)
            if (err) {
                return res.status(500).send({ err: "database error" })
            }
            else {
                return res.status(201).send({ message: "success" });
            }
        })
    }
})




module.exports = router;