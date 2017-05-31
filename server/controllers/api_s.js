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
	console.log('req.params.num1',req.params.num1)
	console.log('req.params.num2',req.params.num2)
	var answer = parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10);
	// var answer = req.params.num1 + req.params.num2
	console.log('answer',answer)
	var result = new num({num:answer})
	console.log('result',result)
	result.save(function(err){
		if(err){
			console.log('error')
		}else{
			console.log('numbers are added');
			res.redirect('/'+ req.params.num1 + '/' + req.params.num2);
			res.json();
		}
	})
},


show_one: function(req,res){
	 num.findOne({num: parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10)}, function(err, api) {
	 // Retrieve 1 object
	 // This code will run when the DB is done attempting to retrieve 1 record.
	 
	 res.json(api);
	}) 

},





}