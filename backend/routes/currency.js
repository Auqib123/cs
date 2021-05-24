const { currencyList, addCurrency } = require('../controllers/currency')
module.exports = (app) => {

    app.get('/currency', currencyList)
    app.post('/currency', addCurrency)

}