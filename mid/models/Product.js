const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    pid: Number,
    qty: Number,
});

module.exports = mongoose.model('Product', productSchema);
