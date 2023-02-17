'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const date = new Date()

    await queryInterface.bulkInsert('Cryptids', [{
      names: 'Bell Witch',
      yearDiscovered: 1817,
      locationDiscovered: 'Tennessee',
      createdAt: date,
      updatedAt: date,
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Cryptids', null, {})

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
