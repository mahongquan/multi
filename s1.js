const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './data.sqlite'
});
