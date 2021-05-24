/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * GearKit schema
 */

const currencySchema = new Schema({
    name: { type: String, required: true },
    symbol: { type: String, reqeuired: true },
}, { timestamps: true });

module.exports = mongoose.model('currency', currencySchema);