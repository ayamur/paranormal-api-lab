'use strict';

const fs = require('fs'); // imports the filesystem module from Node.js
const path = require('path'); // imports the path module from Node.js
const Sequelize = require('sequelize'); // imports the Sequelize ORM
const process = require('process'); // imports the process module from Node.js
const basename = path.basename(__filename); // gets the basename of the current file
const env = process.env.NODE_ENV || 'development'; // gets the current environment (development, test, or production)
const config = require(__dirname + '/../config/config.js')[env]; // loads the configuration settings for the database
const db = {}; // creates an empty object to hold the models and the Sequelize instance

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

async function testConnection(params) {
  try {
    await sequelize.authenticate({ logging: false });
    console.log("Database connection has been established.");
  } catch (error) {
    console.error("There was a problem connecting to the database:", error);
  }
};

testConnection();

fs
  .readdirSync(__dirname) // reads all the files in the current directory
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize; // attaches the Sequelize instance to the db object
db.Sequelize = Sequelize; // attaches the Sequelize module to the db object

module.exports = db; // exports the db object
