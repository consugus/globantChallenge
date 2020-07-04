const express = require( 'express' );
const app = express();
const { users } = require( '../config/config' );
const _ = require( 'underscore' );
const { tokenVerify } = require( '../middlewares/authentication' );




// ================================================
//                   Get items
// ================================================
app.get( '/items/getItems', tokenVerify, ( req, res ) => {
    console.log( "llegó al getItems".green );
    return res.status( 200 ).json({
        ok: true,
        message: "llegó al getItems"
    });
});

app.get( '/items/getItemById/:id', tokenVerify, ( req, res ) => {
    console.log( "llegó al getItems".green );
    return res.status( 200 ).json({
        ok: true,
        message: "llegó al getItemById"
    });
});

app.post( '/items/createItem', tokenVerify, ( req, res ) => {
    console.log( "llegó al getItems".green );
    return res.status( 200 ).json({
        ok: true,
        message: "llegó al createItems"
    });
});

app.delete( '/items/deleteItem/:id', tokenVerify, ( req, res ) => {
    console.log( "llegó al getItems".green );
    return res.status( 200 ).json({
        ok: true,
        message: "llegó al deleteItems"
    });
});









module.exports = app;