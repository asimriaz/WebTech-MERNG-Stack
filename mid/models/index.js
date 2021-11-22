const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sales', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify:false 
});

module.exports = {
    Product: require('./Product'),
    Order: require('./Order') 
   
}