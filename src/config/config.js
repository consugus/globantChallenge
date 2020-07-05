const bcrypt = require( 'bcrypt' );

// ?================================================
// ?                   Port
// ?================================================
process.env.PORT = process.env.PORT || 3000;




// ?================================================
// ?                   MySqlConnection
// ?================================================
process.env.DATABASE = 'globantChallenge';
process.env.MYSQL_USERNAME = 'root';
process.env.MYSQL_PASSWORD = 'con5u9u5';


// ?================================================
// ?                 JsonWebToken
// ?================================================
process.env.TOKEN_EXPIRATION_TIME = '30d';                          // Expires in 30 days
process.env.SECRET = process.env.SECRET || "GlobantChallenge";


// ?================================================
// ?       User Data (for testing purpose)
// ?================================================
let user = {
    id: "007",
    name: "Gustavo",
    email: "consugus@gmail.com",
    password: bcrypt.hashSync( "123456", 10 )
};
let users = [];
users.push( user );


module.exports = { users };
