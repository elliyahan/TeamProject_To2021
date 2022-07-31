var express = require("express");
var router = express.Router();

var Product = require('../schema/ProductSchema');

router.post('/update', function (req, res, next) {

    var _id = req.body._ID;
    var imagewonsanji = req.body.IMAGEWONSANJI;
    var maintext = req.body.MAINTEXT;
    var subtext1 = req.body.SUBTEXT1;
    var subtext2 = req.body.SUBTEXT2;
    var subtext3 = req.body.SUBTEXT3;
    var subtext4 = req.body.SUBTEXT4;
    var utong = req.body.UTONG;
    var certimage = req.body.CERTIMAGE;

    if (_id == undefined || imagewonsanji == undefined || maintext == undefined || subtext1 == undefined
        || subtext2 == undefined || subtext3 == undefined || subtext4 == undefined || utong == undefined || certimage == undefined) {
        return res.status(400).send({ err: "param is null" })
    }
    else {

        Product.findOne({ _id: _id }, function (err, obj) {
            if (err) {
                return res.status(500).send({ err: "database error" })
            }
            else if (obj == null) {
                return res.status(201).send({ message: "success" });
            }
            else {
                Product.updateOne({ _id: _id }, { imagewonsanji: imagewonsanji, maintext: maintext, subtext1: subtext1, subtext2: subtext2, subtext3: subtext3, subtext4: subtext4, utong: utong, certimage: certimage }, function (err, result) {
                    if (err) {
                        return res.status(500).send({ status: "3", errormessage: message.serverError });
                    }
                    else {
                        return res.status(201).send({ status: "1", result });

                    }
                })
            }
        })
    }
})



module.exports = router;