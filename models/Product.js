const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Variant' }]
});

module.exports = mongoose.model('Product', ProductSchema);