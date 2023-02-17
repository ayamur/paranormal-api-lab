'use strict'; //This line sets the code to run in "strict mode". Strict mode is simply a restricted variant of JavaScript. It helps you write safer JavaScript by preventing certain actions from being taken.
const {
  Model
} = require('sequelize'); //This line imports the Model class from Sequelize. We’ll use the Model class as the basis for our new model.
module.exports = (sequelize, DataTypes) => { //This line defines an anonymous function and assigns it to the module.exports object. Ultimately, the function will return the finalized model. This is just a way of making the class available for other files to import and use. It also accepts two parameters, the sequelize instance and the DataTypes that used to define the class’s attributes.
  class Cryptid extends Model { //This line defines a new class called Cryptid that inherits properties and methods from the Model class we imported from Sequelize above.
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Cryptid.hasMany(models.Sighting, {
        foreignKey: 'cryptidId',
        as: 'sightings'
      })

      //This line defines a static method called associate, which can define relationships between different models in your application. We’ll learn more about this feature in a later lesson, so don’t worry about it for now.
      // define association here
    }
  }
  Cryptid.init({ //This line calls upon the init method of the newly created Cat class. The Model.init method accepts two arguments, the first being an attributes object and the second being an options object.
    //The attributes object defines the properties of our model. Each property must correspond with a column in the relevant table. Every column defined in a model must have a data type. The values used in Sequelize differ slightly from what you’ve seen used in Mongoose. For example, instead of a Number datatype, we’ll use INTEGER.
    //With the options object, we define the modelName and pass in the sequelize instance. This sequelize instance will allow our model to perform CRUD operations on the database.
    names: DataTypes.STRING,
    yearDiscovered: DataTypes.INTEGER,
    locationDiscovered: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cryptid',
  });
  return Cryptid;
}; //Any changes you make within the Model.init method will require a migration to reflect those changes in the database. However, associations and helper methods are handled at the application level, so changes to these aspects of a model will not require a migration.