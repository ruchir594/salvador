var express = require('express');
var router = express.Router();
var http = require('http');

function get_json(url, callback) {
    http.get(url, function(res){
        var body = '';
        res.on('data', function(chunk) {
            body = body + chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            callback(response);
        });
    });
}
/* GET home page. */
router.get('/', function(req, res, next) {
    var store;
    var data = get_json("http://mappy.dali.dartmouth.edu/members.json", function(resx){
        console.log(typeof(resx));
        console.log(resx[0]);
        console.log(resx[0].name);
      res.render('index', { title: 'Express', res: resx });
    });

});

module.exports = router;
