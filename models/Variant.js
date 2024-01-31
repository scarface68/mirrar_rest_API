const mongoose = require('mongoose');

const VariantSchema = mongoose.Schema({
    name: String,
    SKU: String,
    additionalCost: Number,
    stockCount: Number
});

module.exports = mongoose.model('Variant', VariantSchema);