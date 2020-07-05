const Sequelize = require( 'sequelize' );
module.exports = new Sequelize( process.env.DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: 'localhost',
    user: 'root',
    port: 3306,
    dialect: 'mysql'
});