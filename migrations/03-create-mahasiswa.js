"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mahasiswa", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      NIM: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tanggal_lahir: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tempat_lahir: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tahun_masuk: {
        allowNull: false,
        type: Sequelize.STRING,
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

    // Make id_kode_program_studi foreign key
    await queryInterface.addConstraint("mahasiswa", {
      fields: ["id_program_studi"],
      type: "foreign key",
      name: "custom_fkey_id_programStudi",
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
    await queryInterface.dropTable("mahasiswa");
  },
};
