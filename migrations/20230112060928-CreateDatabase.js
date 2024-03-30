'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `CREATE DATABASE IF NOT EXISTS achievify_users`,
    );
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(
      `DROP DATABASE IF NOT EXISTS achievify_users`,
    );
  },
};
