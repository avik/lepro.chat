var cwd = process.cwd();

module.exports = function(app) {
    app.get('/app', function(req, res) {
        res.sendfile(cwd + '/app.js');
    });
}