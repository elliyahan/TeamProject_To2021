var express = require("express");
var router = express.Router();

var Auction = require('../schema/AuctionSchema');

router.post('/', function (req, res, next) {

    var auction = new Auction();
    var discription = req.body.DISCRIPTION;
    var bidprice = req.body.BIDPRICE;
  /*   var manufacturer = req.body.MANUFACTURER;
    var name = req.body.NAME;
    var year = req.body.YEAR;
    var imagesource = req.body.IMAGESOURCE;
    var price = req.body.PRICE;
    */

    if (discription == undefined || bidprice == undefined || manufacturer == undefined || name == undefined || year == undefined
        || imagesource == undefined || price == undefined) {
        return res.status(400).send({ err: "param is null" })
    }
    else {
       auction.manufacturer = "";
       auction.name = "";
       auction.year = "";
       auction.imagesource = "";
       auction.price = "";
       auction.discription = discription;
       auction.bidprice = bidprice;
        

        auction.save(function (err) {
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