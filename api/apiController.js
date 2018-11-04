var bodyparser = require('body-parser');
var appliance = require('../models/applianceModel.js');
var user = require('../models/userModel.js');

module.exports = function(app){    
    app.use(bodyparser.json());

    app.get('/espdata', function(req, res){
        appliance.find({rid: "itsHarshRoom"}, function(err, ack){
            if(err) throw err;
            res.send(ack);
        });   
    });

    app.get('/api', function(req, res){
        appliance.find({rid: "itsHarshRoom"}, function(err, ack){
            if(err) throw err;
            res.send(ack);
        });   
    }); 

    app.post('/api', function(req, res){
        appliance.create(req.body, function(err, ack){
            if(err) throw err;
            res.send(ack);
        });
    });

    app.put('/api/', function(req, res){
        appliance.updateOne(req.body,function(err, ack){
            if(err) throw err;
            res.send(ack);
        });
    });

    app.delete('/api/:id', function(req, res){
        res.send("DELETE Request");
    });

    app.post('/login', function(req, res){
        user.find({username: req.body.username}, function(err, ack){
            if(err) throw err;
            if(ack[0]){
                if(req.body.password==ack[0].password){
                    console.log("switch");
                    res.writeHead(301, {Location: '/htmlPages/switch.html'});
                }
                else{
                    console.log("wrong password");
                    res.writeHead(301, {Location: '/htmlPages/login.html'});
                }
            }
            else{
                console.log("invalid user");
                res.writeHead(301, {Location: '/htmlPages/login.html'});
            }
        });
    });

    app.post('/register', function(req, res){
        user.create(req.body, function(err, ack){
            if(err) throw err;
            res.send(ack);
        });
    });

}