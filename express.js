var express = require('express');
var mincer  = require('mincer');

var routes  = require('./routes')

var app = express();
app.use(express.static('public'));
routes(app);

app.configure(function() {
    mincerEnv = new mincer.Environment()
    mincerEnv.appendPath('vendor')
    mincerEnv.appendPath('assets/javascript')

    app.use('/assets', mincer.createServer(mincerEnv));
});

app.listen(3000);