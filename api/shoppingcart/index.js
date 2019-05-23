'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./shoppingcart.controller');
    
router.get("/", controller.getCartData)
router.post("/", controller.createCartData);
// router.put("/", controller.updateBookdata)
// router.delete("/", controller.deleteBookdata)
module.exports = router;