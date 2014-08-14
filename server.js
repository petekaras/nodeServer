var express = require('express');
 
var app = express();

 
app.get('/mm/accept', function(req, res) {
var url = require('url');
var url_parts = url.parse(req.url, true);
var query = url_parts.query;

log(url_parts);
res.send("status: ok");
});

 
app.listen(3000);
console.log('Listening on port 3000...');


function log(word) {
var fs = require('fs');
var msg = word.query;
fs.appendFile('/tmp/test.log', msg +"\n", function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log(word.query);
    }
});






}

