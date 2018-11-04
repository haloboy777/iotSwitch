var mongoose = require('mongoose');
var schema = mongoose.Schema;
// var userSchema = new schema({
//     email: String,
//     username: String,
//     password: String,
//     appliance: [applianceSchema]
// });

var applianceSchema = new schema({
    rid: Object,
    applianceName: [String],
    applianceState: [Boolean]
});

var appliance = mongoose.model('appliancesCollection', applianceSchema);

module.exports = appliance;