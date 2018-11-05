var bodyparser = require('body-parser');
var appliance = require('../models/applianceModel.js');
var user = require('../models/userModel.js');
var fs= require('fs');

module.exports = function(app){   
    app.use(bodyparser.urlencoded({
        extended: true
    }));
    app.use(bodyparser.json());
    
    app.get('/', function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
            var readHtml = fs.createReadStream('./htmlPages/login.html', 'utf8');
            readHtml.pipe(res);  
    });

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
                    var htmlFilename='switch.ejs';
                }
                else{
                    var htmlFilename='login.ejs';
                    console.log("invalid password");
                }
            }
            else{
                var htmlFilename='login.ejs';
                console.log("invalid user");
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            var readHtml = fs.createReadStream('./htmlPages/'+htmlFilename, 'utf8');
            readHtml.pipe(res);
        });
    });

    app.post('/register', function(req, res){
        user.create(req.body, function(err, ack){
            if(err) throw err;
            res.send(ack);
        });
    });

}
