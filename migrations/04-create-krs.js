"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("krs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NIM: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      kode_mata_kuliah: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_mahasiswa: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      id_mata_kuliah: {
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

    // Make mahasiswa foreign key
    await queryInterface.addConstraint("krs", {
      fields: ["id_mahasiswa"],
      type: "foreign key",
      name: "custom_fkey_id_mahasiswa",
      references: {
        //Required field
        table: "mahasiswa",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    // Make id_mata_kuliah foreign key
    await queryInterface.addConstraint("krs", {
      fields: ["id_mata_kuliah"],
      type: "foreign key",
      name: "custom_fkey_id_mata_kuliah",
      references: {
        //Required field
        table: "mata_kuliah",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("krs");
  },
};
