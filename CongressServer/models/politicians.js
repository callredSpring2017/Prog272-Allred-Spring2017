var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
});

module.exports = mongoose.model('politician', politicianSchema);
