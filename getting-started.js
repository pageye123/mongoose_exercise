var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// 数据库名字是test;

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(callback){
	console.log('数据库连接成功');
})

var kittySchema = mongoose.Schema({
	name: String
});

kittySchema.methods.speak = function(){
	var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitteny',kittySchema);
// kitteny变成复数之后就是数据库中表collection的名字，比如kitteny在数据库中会显示kittenies

var silence = new Kitten({name: 'Silence'});
silence.speak();

var fluffy = new Kitten({
	name: 'fluffy'
});



// 通过save方法保存到数据库
fluffy.save(function(err,fluffy){
	if (err) return console.error(err);
});


Kitten.find(function(err,kittensx){
	if(err) return console.error(err);
	console.log(kittensx);
})
// kittensx只是一个参数，返回query#find的结果。