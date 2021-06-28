"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("program_studi", [
      {
        kode: "KED",
        nama: "KEDOKTERAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kode: "TEK",
        nama: "TEKNIK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kode: "PTN",
        nama: "PERTANIAN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("program_studi", null, {});
  },
};
