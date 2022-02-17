const Sequelize = require('sequelize');
const db = require('./database');


const Product = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },

});

module.exports = Product