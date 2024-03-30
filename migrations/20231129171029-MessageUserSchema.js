'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('message_user', {
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
      mUserIdO: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      mUserIdT: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      chatType: {
        type: Sequelize.ENUM('individual', 'company'),
        allowNull: true,
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
    await queryInterface.dropTable('message_user');
  },
};
