const mongoose = require('mongoose');

const productShema =  mongoose.Schema({
   /* id: {
        type: Number,
        required: true,
    },*/
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    imageProduct: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Product", productShema);