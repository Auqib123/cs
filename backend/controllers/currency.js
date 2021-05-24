const CURRENCY = require('../models/currency')
module.exports = {
    async currencyList(req, res) {
        try {

            let currencies = await CURRENCY.find()
            res.status(200).json(currencies)
        } catch (err) {
            res.status(400).json(err)

        }
    },
    async addCurrency(req, res) {
        try {

            let currencies = await CURRENCY.create(req.body)
            res.status(200).json(currencies)
        } catch (err) {
            res.status(400).json(err)
        }
    }
}