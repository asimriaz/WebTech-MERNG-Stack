const mongoose = require('mongoose');
//authentication
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.enbv6.mongodb.net/authentication', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify:false 
});

module.exports = {
   User: require('./User')
}