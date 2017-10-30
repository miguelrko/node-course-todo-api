const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}) <-- remove everything that match. return a status

// Todo.findOneAndRemove <-- remove the first that match and return the one that was removed
// Todo.findByIdAndRemove <-- exactly like the previous one but using Id
	//findbyId process successfully even if nothing was deleted. a null is returned
