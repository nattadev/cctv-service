'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('image', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      device_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      station_id: {
        type: Sequelize.UUID
      },
      picture_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      snapshot_at: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('image');
  }
};