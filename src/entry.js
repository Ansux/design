require('expose?$!jquery');
require('./js/bootstrap.min.js');
var angular = require('angular');

var newsJson = require('./json/news.json');
var caseJson = require('./json/case.json');
require('./js/stickUp.min.js');
require('./ng.js')(angular,newsJson,caseJson);

require('./css/font-ali.css');
require('./css/bootstrap.css');
require('./css/bs.css');