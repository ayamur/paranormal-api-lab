'use strict';

const cryptids = require('../controllers/cryptids');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sightings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      personalSighting: {
        type: Sequelize.BOOLEAN
      },
      cryptidId: {
        type: Sequelize.INTEGER,
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sightings');
  }
};