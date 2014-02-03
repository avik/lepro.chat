var hello     = require('./hello')
var app_route = require('./app')

module.exports = function(app) {
    hello(app);
    app_route(app);
}