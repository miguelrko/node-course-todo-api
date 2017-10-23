const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '59eddaf9659aff02b97fcc171';

// if(!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '59e8b3ddf1407803a57ca90f';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('User not found');
	}
	console.log('User By Id', user);
}).catch((e) => console.log(e));