'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var cartSchema = new Schema({
    
    itemname: { type: String },
    itemcost: { type: String }
})


module.exports = mongoose.model('cart', cartSchema);