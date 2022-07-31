var express = require("express");
var router = express.Router();

var User = require('../schema/UserSchema');

router.post('/', function (req, res, next) {

    var user = new User();

    var id = req.body.ID;
    var password = req.body.PASSWORD;
    var name = req.body.NAME;
    var phonenumber = req.body.PHONENUMBER;
    var email = req.body.EMAIL;

    User.findOne({ id: id }, function (err, obj) {
        if (err) {
            return res.status(500).send({ err: '에러1' })
        }
        else if (obj != null) {
            return res.status(400).send({ err: '중복 값' })
        }
        else {
            user.id = id;
            user.password = password;
            user.name = name;
            user.phonenumber = phonenumber;
            user.email = email;

            user.save(function (err) {
                if (err) {
                    return res.status(500).send({ err: '에러2' })
                }
                return res.status(201).send({ status: "성공" })
            })
        }
    })
})

module.exports = router;