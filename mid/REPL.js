const mongoose = require('mongoose');
const db = require('./models')


//db.Product.find()
//.then(products => console.log(products))

// db.Order.create({
//     items: [
//         {
//             product: '606c0f945c3760f48d2963e4',
//             qty: 1
//         },
//         {
//             product: '606c0f945c3760f48d2963e5',
//             qty: 2
//         }
//     ]
// })
//     .then(res => {
//         console.log(res)
//         process.exit();
//     })


db.Order.find({ orderId: 4 })
.populate('items.product')
.then(order => {
    console.log(JSON.stringify(order, null, '  '));
    process.exit();
})


