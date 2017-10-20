var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = {
	User
};

// var newUser = new User({
// 	email: 'miguel@sd.com'
// })

// newUser.save().then((doc) => {
// 	console.log('User Saved ', doc);
// }, (e) => {
// 	console.log('Unable to save user', e);
// });