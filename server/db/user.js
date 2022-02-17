const Sequelize = require('sequelize');
const db = require('./database');


const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      //min length
      len: [8, 20],
      //min complexity by certian types of character
      kis: /^.*[^a-zA-Z0-9].*$/i,

      // not conatians to make sure we dont end up with insecure passwords
      // use 'not: ' with regex
    },
  },
});


module.exports = User