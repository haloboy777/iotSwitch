var bodyparser = require('body-parser');
var appliance = require('../models/lyuModel.js');

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
}