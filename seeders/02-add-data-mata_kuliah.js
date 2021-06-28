"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mata_kuliah", [
      {
        kode: "104C1313",
        nama: "PENGANTAR FISIOTERAPI",
        SKS: 3,
        kode_program_studi: "KED",
        id_program_studi: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kode: "TKS 1316",
        nama: "Hidrolika",
        SKS: 2,
        kode_program_studi: "TEK",
        id_program_studi: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        kode: "AET424",
        nama: "Pertanian Organik",
        SKS: 4,
        kode_program_studi: "PTN",
        id_program_studi: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mata_kuliah", null, {});
  },
};
