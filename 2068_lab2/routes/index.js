'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var result;

    function calculate(method, x, y) {
        var xNumber = parseInt(x);
        var yNumber = parseInt(y);
        
        if (method === "add") {
            result = x + " + " + y + " = " + (xNumber + yNumber);
            console.log(result);
        }
        else if (method === "subtract") {
            result = x + " - " + y + " = " + (xNumber - yNumber)
            console.log(result);
        }
        else if (method === "multiply") {
            result = x + " x " + y + " = " + (xNumber * yNumber)
            console.log(result);
        }
        else if (method === "divide") {
            result = x + " / " + y + " = " + (xNumber / yNumber)
            console.log(result);
        }
        else {
            result = "Error"
            console.log(result);
        }
    }

    if (Object.keys(req.query).length > 0) {
        calculate(req.query.method, req.query.x, req.query.y);
    }


    res.render('index', { title: 'Calculation', calculate: result });
});

module.exports = router;
