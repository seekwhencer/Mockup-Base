var page = require('webpage').create();
page.open('http://localhost:8085/example', function() {
  page.render('phantom.png');
  phantom.exit();
});