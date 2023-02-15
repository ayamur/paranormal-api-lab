'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cryptid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cryptid.init({
    names: DataTypes.STRING,
    yearDiscovered: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cryptid',
  });
  return Cryptid;
};