const axios = require( 'axios' );
const _ = require( 'underscore' );


createItem = ( item ) => {

    return "Llegó al items-controller.js/createItem";

}


getAllItems = ( ) => {
    return "Llegó al items-controller.js/getAllItems";
}


getItemById = ( id ) => {
    return "Llegó al items-controller.js/getItemById";
}


updateItem = ( id ) => {
    return "Llegó al items-controller.js/updateItem";
}


deleteItem = ( id ) => {
    return "Llegó al items-controller.js/deleteItem";
}



module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};