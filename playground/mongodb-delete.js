const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return	console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	// db.collection('Todos').deleteMany({text: 'eat breatfast'}).then((result) => {
	// 	console.log(result); // result: {n:3, ok:1} at the top
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'eat breakfast'}).then((result) => {
	// 	console.log(result); // result: {n:1, ok:1} at the top
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	//chalenge
	// db.collection('Users').deleteMany({name: 'Miguel'}).then((result) => {
	// 	console.log(result);
	// });
	var id = new ObjectID('59e74439e28b4f02a67e9238');
	db.collection('Users').findOneAndDelete({_id: id}).then((result) => {
		console.log(result);
	});

	//db.close();
});