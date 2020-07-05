const axios = require( 'axios' );
const _ = require( 'underscore' );
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );


createItem = async ( data ) => {
    return await Item.create( data );
}


 getAllItems = async ( ) => {
    return await Item.findAll();
}


getItemById = async ( id ) => {
    return await Item.findByPk( id );
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