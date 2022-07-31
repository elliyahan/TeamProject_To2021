var mongoose = require("mongoose");
//mongodb plugin for primary key's auto increment
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/main");
autoIncrement.initialize(connection);

var Schema = mongoose.Schema;

var auctionSchema = new Schema({
  discription: {
        type: String
    },
    bidprice: {
        type: String
    },
    manufacturer: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imagesource: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }
});

auctionSchema.plugin(autoIncrement.plugin, 'auction');
module.exports = connection.model("auction", auctionSchema)