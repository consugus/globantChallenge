const express = require( 'express' );
const app = express();
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );
const { users } = require( '../config/config' );
const _ = require( 'underscore' );
const colors = require( 'colors' );
const { tokenVerify } = require( '../middlewares/authentication' );
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require( '../controllers/items-controllers' );


// ?================================================
// ?                  Get items
// ?================================================
app.get( '/items/getItems', tokenVerify, async ( req, res ) => {
    let items;
    try {
        items = await getAllItems()
        if( !items ){
            return res.status( 404 ).json({
                ok: false,
                resp: "No items found"
            });
        }
    }
    catch ( err ){
        return res.status( 500 ).json({
            ok: false,
            resp: "Something on the server didn´t work right: ", err
        })
    };

    return res.status( 200 ).json({
        ok: "true",
        resp: items
    });
});


// ?================================================
// ?               Get items by Id
// ?================================================
app.get( '/items/getItemById/:id', tokenVerify, async ( req, res ) => {
    const id = req.params.id;
    let item;

    try {
        item = await getItemById( id )
        if( !item ){
            return res.status( 404 ).json({
                ok: false,
                resp: "No item found"
            });
        }

    }
    catch ( err ){
        return res.status( 500 ).json({
            ok: false,
            resp: "Something on the server didn´t work right: ", err
        })
    };

    return res.status( 200 ).json({
        ok: true,
        resp: item
    });
});



// ?================================================
// ?                 Create item
// ?================================================
app.post( '/items/createItem', tokenVerify, async ( req, res ) => {
    const data = itemsToUpdate;
    let resp;

    try {
        resp =  await createItem( data )
        if( !resp ){
            return res.status( 404 ).json({
                ok: false,
                resp: "Could not create new item"
            });
        }
    }
    catch (err){
        return res.status( 500 ).json({
            ok: false,
            resp: "Something on the server didn´t work right: ", err
        })
    };

    return res.status( 200 ).json({
        ok: true,
        resp
    });
});



// ?================================================
// ?                 Update items
// ?================================================
app.put( '/items/updateItem/:id', tokenVerify, async ( req, res ) => {
    const id= req.params.id, data = req.body;
    let resp;
    try {
        resp = await updateItem( id, data )
        if( resp[0] === 0 ){
            return res.status( 404 ).json({
                ok: false,
                resp: "Could not update. Item does not exist"
            });
        }
    }
    catch (err){
        return res.status( 500 ).json({
            ok: false,
            resp: "Something on the server didn´t work right: ", err
        })
    };

    return res.status( 200 ).json({
        ok: true,
        resp
    });
});


// ?================================================
// ?                 Delete items
// ?================================================
app.delete( '/items/deleteItem/:id', tokenVerify, async ( req, res ) => {
    const id = req.params.id;
    let deleted;

    try {
        deleted = await deleteItem( id );
        if( !deleted ){
            return res.status( 404 ).json({
                ok: false,
                resp: "Could not delete. Item does not exist"
            });
        }
    }

    catch ( err ){
        return res.status( 500 ).json({
            ok: false,
            resp: "Something on the server didn´t work right: ", err
        })
    };

    return res.status( 200 ).json({
        ok: true,
        resp: "Item successfully deleted"
    });
});


// ?================================================
// ?           Buy Items (increase stock)
// ?================================================
app.post('/items/buyItems', async ( req, res ) => {
    const itemsToUpdate = req.body;
    let message = "";

    const len = itemsToUpdate.length;
    for( let i = 0 ; i < len ; i++ ){
        let id = itemsToUpdate[ i ].idItem;
        let q = itemsToUpdate[ i ].quantity;
        let data = { stock: null };
        data.stock = ( await getItemById( id )).dataValues.stock + q;
        resp = await updateItem( id,  data );
        message += ( (resp[0] > 0 ) ? `Item ${ id } successfully updated; ` : `Item ${ id } could not be updated; ` );
    }

    return res.status( 200 ).json({
        ok: true,
        message
    })
})



module.exports = app;