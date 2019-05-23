var cartModel = require("./shoppingcart.model");

exports.getCartData = function(req, res, next) {
    cartModel.find(function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.createCartData = function(req, res, next) {
    cartModel.create(req.body, function(err, data) {
        if (err) return next(new Error(err))
        return res.status(200).send(data);
    })
}

