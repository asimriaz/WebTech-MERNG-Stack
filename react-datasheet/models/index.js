const mongoose = require('mongoose');

//mongoose.set('useFindAndModify', false);

//mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.enbv6.mongodb.net/datasheet', {
mongoose.connect('mongodb://localhost:27017/datasheet', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

module.exports = {
	Student: require('./Student'),
	Course: require('./Course'),
	Grade: require('./Grade'),
	Registration: require('./Registration'),
};
