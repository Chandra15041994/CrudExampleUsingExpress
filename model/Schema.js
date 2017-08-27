var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dataSchema = new Schema({
    Name : String,
    EmpId : Number,
    Address : String
});
var data = mongoose.model('data', dataSchema )
module.exports = data;