var mongoose = require('mongoose');
var num = mongoose.model('num');

module.exports = {

index: function(req,res){
	
	
	num.find({},function(err,api_s){
		if(err){
		 		console.log("error");
		 	}
		 	else{
		 		console.log("success");
		 		 res.json(api_s);
		 	}	

		
	})
},

add_two: function(req,res){
	
	console.log('inside add two function')
	// var i = req.params.num1
	// var j = req.params.num2
	var i = eval(req.params.num1)
	var j = eval(req.params.num2)
	console.log('req.params.num1',i)
	console.log('req.params.num2',j)
	var answer = parseInt(i, 10) + parseInt(j, 10);
	// var answer = req.params.num1 + req.params.num2
	console.log('answer',answer)
	var result = new num({num:answer})
	console.log('result',result)
	result.save(function(err){
		if(err){
			console.log('error')
		}else{
			console.log('numbers are added');
			res.redirect('/'+ i + '/' + j);
			res.json();
		}
	})
},


show_one: function(req,res){
	// var i = req.params.num1
	// var j = req.params.num2
	var i = eval(req.params.num1)
	var j = eval(req.params.num2)
	 num.findOne({num: parseInt(i, 10) + parseInt(j, 10)}, function(err, api) {
	 // Retrieve 1 object
	 // This code will run when the DB is done attempting to retrieve 1 record.
	 
	 res.json(api);
	}) 

},





}