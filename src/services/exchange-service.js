const axios = require('axios');

getExchangeRate = async () => {
    const baseCurrency = 'USD';
    const destinationCurrency = 'EUR';
    const url = `https://api.exchangeratesapi.io/`;
    const query = `${ url }latest?base=${ baseCurrency }&symbols=${ destinationCurrency }`;

    // console.log( query );

    const data = (await axios.get(query)).data

    // console.log( "data".brightYellow, data );

    return data;




}




module.exports = getExchangeRate;