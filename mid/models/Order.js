const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const Order = new mongoose.Schema({
    orderdate: {
		type: Date,
		default: Date.now
	},
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        qty: Number
    }],
});


Order.plugin(autoIncrement.plugin, { model: 'Order', field: 'orderId', startAt: 1, incrementBy: 1 });
module.exports = mongoose.model('Order', Order);