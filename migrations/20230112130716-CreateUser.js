'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'others', 'Prefer not to say'),
        allowNull: true,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sexOrient: {
        type: Sequelize.ENUM('straight', 'gay', 'lesbian', 'bisexual'),
        allowNull: true,
      },
      loginType: {
        type: Sequelize.ENUM('social', 'normal'),
        allowNull: false,
      },
      userType: {
        type: Sequelize.ENUM('user', 'admin'),
        allowNull: false,
      },
      socialLoginKey: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      socialLoginKey: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      device: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      firebaseToken: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('users');
  },
};
