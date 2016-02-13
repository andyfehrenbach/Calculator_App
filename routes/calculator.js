var express = require('express');
var router = express.Router();
var path  = require('path');
var data;
var result;

router.post('/', function(req,res){
    data = req.body;
    var type = data.type;
    var x = parseFloat(data.xDigit);
    var y = parseFloat(data.yDigit);

    calculate(type, x, y);
    console.log(result);
    result = result.toString();
    res.send(result);
});


function calculate (type, x, y) {

    if(type == 'add'){
         result = add(x,y);
    }
    if(type == 'subtract'){
        result = subtract(x,y);
    }
    if(type == 'multiply'){
       result =  multiply(x,y);
    }
    if(type == 'divide'){
       result = divide(x,y);
    }
    return result;
}


function add (x,y) {
    return x + y;
}

function subtract (x,y) {
    return x - y;
}
function multiply (x,y) {
    return x * y;
}

function divide (x,y) {
    return x / y;
}

module.exports = router;