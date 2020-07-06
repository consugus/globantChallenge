const axios = require( 'axios' );
const _ = require( 'underscore' );
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );
const getExchangeRate = require( '../services/exchange-service' );


createItem = async ( data ) => {
    return await Item.create( data );
}


 getAllItems = async ( ) => {

    try {
        const exchangeData = await getExchangeRate();
        let items = await Item.findAll();
        const len = items.length;
        for( let i = 0 ; i < len ; i++ ){
            items[ i ].dataValues.valueEUR = await addValueInEur( items[ i ] );
        }
        return items
    }
    catch ( err ){
        throw new Error ('', err)
    };




}


getItemById = async ( id ) => {
    let item = await Item.findByPk( id );
    item.dataValues.valueEUR = await addValueInEur( item );
    return item;
}

addValueInEur = async ( item ) => {
    const exchangeData = await getExchangeRate();
    const inEUR = `${ ( item.value * exchangeData.rates.EUR ).toFixed(2) } (${ exchangeData.date })`;
    return inEUR
}


updateItem = async ( id, data ) => {
    return await Item.update( { value: data.value }, { where: { idItem: id } } );;
}


deleteItem = async ( id ) => {
    return await Item.destroy({
        where: { idItem: id }
    });
}



module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
}