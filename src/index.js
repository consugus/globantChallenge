require( './config/config' );
const colors = require( 'colors' );
const express = require( 'express' );
const path = require( 'path' );
const bodyParser = require( 'body-parser' );
const app = express();
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );




// ?================================================
// ?                   Routes
// ?================================================
app.use( require( './routes/routes' ) );


// ?================================================
// ?                   Database
// ?================================================
const db = require( './config/database' );

// ?================================================
// ?               Connection test
// ?================================================
db.authenticate()
    .then( () => { console.log( 'Connection to DB has been established succesfully'.brightCyan ); })
    .catch( err => { console.log( 'Unable to connect to database'.brightREd, err ); })





app.listen(process.env.PORT, () => {
    console.log( `Listening at ${ process.env.PORT }`.brightCyan );
});