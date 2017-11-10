const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');
const jwt = require('jsonwebtoken');
 
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
	_id : userOneId,
	email: 'miguel@example.com',
	password: 'abcdef',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
	}]
}, {
	_id : userTwoId,
	email: 'miguel8@example.com',
	password: 'abcdef',
	tokens: [{
		access: 'auth',
		token: jwt.sign({_id: userTwoId, access: 'auth'}, 'abc123').toString()
	}]
}];

const todos = [{
	_id: new ObjectID(),
	text: 'First test todo',
	_creator: userOneId
	},{
	_id: new ObjectID(),
	text: 'Second test todo',
	_creator: userTwoId,
	completed: true,
	completedAt: 333
	}];

//remove all Todos before each test. So that length = 1 make sense.
const populateTodos = (done) => {
	Todo.remove({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done) => {
	User.remove({}).then(() => {
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();

		return Promise.all([userOne, userTwo])
	}).then(() => done());	
};

module.exports = {todos,populateTodos, users, populateUsers};