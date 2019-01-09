var helper = require('../helper');

module.exports = function(app) {

  // Landing page
  app.get('/', function(req, res) {
    res.sendFile('views/index.html', {
      root: helper.trimDirectory(__dirname)
    });
  });

  // 404 not found route
  app.get('*', function(req, res) {
    res.send('404 not found - ' + req.url);
  });

}
