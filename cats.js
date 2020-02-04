const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

const george = new Cat({
	name: 'George',
	age: 11,
	temperament: 'Grouchy'
});

george.save((err, cat) => {
	if (err) {
		console.log('somthing went wrong');
		console.log(err);
	} else {
		console.log('we just saved the cat to the database');
		console.log(cat);
	}
});

Cat.find({}, (err, cats) => {
	if (err) {
		console.log('somthing went wrong');
		console.log(err);
	} else {
		console.log('we just retrieved a cat to the database');
		console.log(cats);
	}
});

// george.s
