const chalk = require('chalk')
const Sequelize = require('sequelize');
const packageJson = require('../../package.json')

console.log(chalk.blue(`Opening database connection to ${packageJson.name}`))

const db = new Sequelize(`postgres://localhost:5432/${packageJson.name}`, {
  logging: false 
})

module.exports = db