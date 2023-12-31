require('dotenv').config()

const user = process.env.USERNAME
const dbName = process.env.DATABASE
const host = process.env.HOST
const pass = process.env.PASSWORD
const Sequelize = require ('sequelize')

console.log(user,pass)

const db = new Sequelize(dbName, user, pass, {
  host: host,
  dialect: 'postgres'
});


//testing connection
db.authenticate()
  .then(() => {
    console.log('Connection established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db