const Sequelize = require( 'sequelize' );
const sequelize = new Sequelize();


const Item = sequelize.define( 'user', {
    idItems: { type: Sequelize.SMALLINT, primaryKey: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    value: { type: Sequelize.DECIMAL },
    currency: { type: Sequelize.STRING }
})