const axios = require('axios');

getExchangeRate = async () => {
    // this method returns las available data for currency convertion between USD (base currency) to EUR
    const baseCurrency = 'USD';
    const destinationCurrency = 'EUR';
    const url = `https://api.exchangeratesapi.io/`;
    const query = `${ url }latest?base=${ baseCurrency }&symbols=${ destinationCurrency }`;
    const data = (await axios.get(query)).data

    return data;
}




module.exports = getExchangeRate;