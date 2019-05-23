var path = require('path');
var cors = require('cors')
module.exports = function(app) {
    app.use(cors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": true,
        "allowedHeaders": ["Access-Control-Allow-Headers", "Origin, X-Requested-With,Client, Content-Type, Accept,Authorization"]
    }))

    app.use('/api/shoppingcart', require('./api/shoppingcart'));;
    // app.use('/api/bookarray', require('./api/bookarray'));
}