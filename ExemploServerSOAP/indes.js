const express = require('express')
const bodyParser = require('body-parser')
const soap = require('soap');
const app = express()

var myservice = {
    ws: {
        calc: {
            somar : function(args) {
                var n = 1*args.a + 1*args.b;
                return { sumres : n };
            },

            multiplicar : function(args) {
                var n = args.a * args.b;
                return { mulres : n };
            }
        }
    }
};

var xml = require('fs').readFileSync('wscalc1.wsdl', 'utf8');



app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(8001, function(){
    soap.listen(app, '/wscalc1', myservice, xml, function(){
        console.log('server initialized');
    });
});