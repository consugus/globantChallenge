const axios = require( 'axios' );
const _ = require( 'underscore' );
const colors = require( 'colors' );
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );
const getExchangeRate = require( '../services/exchange-service' );


createItem = async ( data ) => {
    let item;
    if( data.hasOwnProperty( 'name'  ) && data.hasOwnProperty( 'description'  ) && data.hasOwnProperty( 'sellPrice'  ) && data.hasOwnProperty( 'currency'  ) ){
        item = await Item.create( data );
    } else{
        throw 'Invalid request'
    }
    return item;
}


 getAllItems = async ( ) => {
    let items;
    try {
        const exchangeData = await getExchangeRate();
        items = await Item.findAll();
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
    return inEUR;
}


updateItem = async ( id, data ) => {
    return await Item.update( data , { where: { idItem: id } } );;
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