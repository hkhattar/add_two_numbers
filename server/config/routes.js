var apis = require('../controllers/api_s.js')
module.exports = function(app){

app.get('/',function(req,res){
	apis.index(req,res)
})

app.get('/new/x=:num1/y=:num2',function(req,res){
	apis.add_two(req,res)
})

// app.get('/new/:num1/:num2',function(req,res){
// 	apis.add_two(req,res)
// })

app.get('/:num1/:num2',function(req,res){
	apis.show_one(req,res)
})


}