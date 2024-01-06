const mongoose = require('mongoose')


const salesShema = mongoose.Schema({

    product: { type: String },
    quantity: { type: String },
    price: { type: String },
    date: {
        type: Date,
        default: Date.now()

    }
})





const SalesModel = mongoose.model('sales', salesShema)

module.exports = SalesModel


















