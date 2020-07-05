const express = require( 'express' );
const app = express();
const { users } = require( '../config/config' );
const _ = require( 'underscore' );
const { tokenVerify } = require( '../middlewares/authentication' );
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require( '../controllers/items-controllers' );




// ================================================
//                   Get items
// ================================================
app.get( '/items/getItems', tokenVerify, ( req, res ) => {
    return res.status( 200 ).json({
        ok: true,
        message: getAllItems()
    });
});

app.get( '/items/getItemById/:id', tokenVerify, ( req, res ) => {
    return res.status( 200 ).json({
        ok: true,
        message: getItemById()
    });
});

app.post( '/items/createItem', tokenVerify, ( req, res ) => {
    return res.status( 200 ).json({
        ok: true,
        message: createItem()
    });
});

app.put( '/items/updateItem/:id', tokenVerify, ( req, res ) => {
    console.log( "llegó al updateItem".green );
    return res.status( 200 ).json({
        ok: true,
        message: updateItem()
    });
});

app.delete( '/items/deleteItem/:id', tokenVerify, ( req, res ) => {
    console.log( "llegó al getItems".green );
    return res.status( 200 ).json({
        ok: true,
        message: deleteItem()
    });
});









module.exports = app;