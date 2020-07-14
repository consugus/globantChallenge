const Sequelize = require( 'sequelize' );
const db = require( '../config/database' );


const Item = db.define( 'item', {
    idItem: { type: Sequelize.SMALLINT, primaryKey: true },
    name: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    sellPrice: { type: Sequelize.DECIMAL },
    stock: { type: Sequelize.INTEGER },
    currency: { type: Sequelize.STRING },
    createdAt: { type:Sequelize.DATE },
    updatedAt: { type:Sequelize.DATE }
})

module.exports = Item;