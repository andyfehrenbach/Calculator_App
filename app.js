var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var calculator = require('./routes/calculator')

app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/object', calculator);

app.get('/*', function(req, res){
    console.log("here is the request: ", req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function(){
    console.log('Marshmallows are ready on port ' + app.get('port'));
});