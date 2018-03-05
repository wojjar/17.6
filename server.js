var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('template');
});
app.get('/auth/google', function (req, res) {
    res.render('auth', {
        login: req.query.login
    });
});

var server = app.listen(3000,'localhost', function () {
    console.log('Aplikacja nasłuchuje na http://localhost:3000');
});
