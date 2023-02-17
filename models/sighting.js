'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sighting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sighting.init({
    name: DataTypes.STRING,
    personalSighting: DataTypes.BOOLEAN,
    cryptidId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cryptids',
        key: 'id'
      }
    },
    dangerZone: {
      type: DataTypes.ENUM('Safe', 'Caution', 'Dangerous', 'Unknown'),
      defaultValue: 'Unknown'
    }
  }, {
    sequelize,
    modelName: 'Sighting',
  });
  return Sighting;
};