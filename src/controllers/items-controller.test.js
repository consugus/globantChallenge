// import itemsController from './items-controllers';
// import { TestScheduler } from 'jest';
const itemsController = require( './items-controllers' );
const test = require( 'jest' );
const db = require( '../config/database' );
const Item = require( '../models/Item-model' );

const expect = global.expect;

// let items =  Item.findAll()
//     .then(

//         describe( 'items', async () => {

//             describe( 'createItem', () => {

//                test( 'Must add an item with props {name, description, value and currency}', () => {
//                    const data = {
//                        "name": "Producto2",
//                        "description": "Testing the implementation of method createItem",
//                        "value": "300",
//                        "currency": "USD"
//                    }
//                    const actual = items;
//                    const expected = [ data ];
//                    items = Item.create( data )
//                         .then(

//                             expect(actual).toEqual(expected)

//                         )
//                });
//             });
//        })

//     )

describe( 'items', async () => {


    //  describe( 'createItem', () => {

    //     test( 'Must add an item with props {name, description, value and currency}', () => {
    //         const data = {
    //             "name": "Producto2",
    //             "description": "Testing the implementation of method createItem",
    //             "value": "300",
    //             "currency": "USD"
    //         }
    //         items = Item.create( data );

    //         const actual = items;
    //         const expected = [ data ];

    //         expect(actual).toEqual(expected);

    //     });

    //  });

    

});