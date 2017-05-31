// require mongoose
var mongoose = require('mongoose');

var NumberSchema = new mongoose.Schema({
	num:Number
})
mongoose.model('num',NumberSchema)
var num = mongoose.model('num')