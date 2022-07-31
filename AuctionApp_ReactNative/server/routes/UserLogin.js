var express = require("express");
var router = express.Router();

var User = require('../schema/UserSchema');

router.post('/', function (req, res, next) {
    var id = req.body.ID;
    var password = req.body.PASSWORD;

    User.findOne({ id: id }, function (err, obj) {
        if (err) {
            return res.status(500).send({ status: "3" });
        }
        else if (obj == null) {
            return res.status(400).send({ status: "2" });
        }
        else if (obj.password != password) {
            return res.status(400).send({ status: "2" });
        }
        else {
            return res.status(200).json({
                status: "1",
                ID: obj.id,
                PASSWORD: obj.password,
            });
        }
    })
});

module.exports = router;