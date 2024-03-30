'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('otp', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      otp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      intent: {
        type: Sequelize.ENUM('password_reset', 'sign_otp', 'general'),
        allowNull: false,
      },
      isUsed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async down(queryInterface) {
    await queryInterface.dropTable('otp');
  },
};
