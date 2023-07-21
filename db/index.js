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
  pool: {
    max: 5, // maximum number of connection in pool
    min: 0, // minimum number of connection in pool
    acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // time in milliseconds that a connection can be idle before being released
  }
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