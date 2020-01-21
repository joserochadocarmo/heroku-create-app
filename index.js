var express = require('express');
var app = express();
const { exec } = require('child_process');

app.get('/', function (req, res) {
    exec(`git clone https://github.com/joserochadocarmo/pgadmin4-heroku-exemple.git pg && cd pg && heroku create && heroku stack:set container && git config --global url."https://:${process.env.HEROKU_API_KEY}@git.heroku.com".insteadOf "https://git.heroku.com" && git push heroku master`, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log(err);
        res.send(`${stdout}${stderr}${err}`);
    });
});

var server = app.listen(process.env.PORT || 8080, '0.0.0.0', function () {
    var port = server.address().port;
    console.log('Example app listening at http:/localhost:%s', port);
});