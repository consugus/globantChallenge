const express = require( 'express' );
const app = express();
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );
const { users } = require( '../config/config' );
const _ = require( 'underscore' );
const { tokenVerify } = require( '../middlewares/authentication' );
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require( '../controllers/items-controllers' );


// ?================================================
// ?                  Get items
// ?================================================
app.get( '/items/getItems', tokenVerify, async ( req, res ) => {
    return res.status( 200 ).json({
        ok: "true",
        resp: await getAllItems()
    });
});


// ?================================================
// ?               Get items by Id
// ?================================================
app.get( '/items/getItemById/:id', tokenVerify, async ( req, res ) => {
    const id = req.params.id
    return res.status( 200 ).json({
        ok: true,
        resp: await getItemById( id )
    });
});



// ?================================================
// ?                 Create item
// ?================================================
app.post( '/items/createItem', tokenVerify, async ( req, res ) => {
    const data = req.body;
    return res.status( 200 ).json({
        ok: true,
        resp: await createItem( data )
    });
});



// ?================================================
// ?                 Update items
// ?================================================
app.put( '/items/updateItem/:id', tokenVerify, async ( req, res ) => {
    const id= req.params.id, data = req.body;
    return res.status( 200 ).json({
        ok: true,
        resp: await updateItem( id, data )
    });
});


// ?================================================
// ?                 Delete items
// ?================================================
app.delete( '/items/deleteItem/:id', tokenVerify, async ( req, res ) => {
    const id = req.params.id;
    await deleteItem( id );
    return res.status( 200 ).json({
        ok: true,
        resp: "Item successfully deleted"
    });
});









module.exports = app;