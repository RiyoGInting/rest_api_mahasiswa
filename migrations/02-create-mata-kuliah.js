"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mata_kuliah", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      kode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      SKS: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      kode_program_studi: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_program_studi: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });

    // Make id_program_studi foreign key
    await queryInterface.addConstraint("mata_kuliah", {
      fields: ["id_program_studi"],
      type: "foreign key",
      name: "custom_fkey_id_program_studi",
      references: {
        //Required field
        table: "program_studi",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("mata_kuliah");
  },
};
