var config = require('./config');

module.exports = {
    dbConnectionURL: function(){
        return 'mongodb://' + config.dbuser + ":" + config.dbpassword + '@ds127961.mlab.com:27961/lyudb'
    }
}