"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("krs", [
      {
        NIM: "0989876573",
        kode_mata_kuliah: "104C1313",
        id_mahasiswa: 1,
        id_mata_kuliah: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NIM: "0987876545",
        kode_mata_kuliah: "TKS 1316",
        id_mahasiswa: 2,
        id_mata_kuliah: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NIM: "0989878767",
        kode_mata_kuliah: "AET424",
        id_mahasiswa: 3,
        id_mata_kuliah: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("krs", null, {});
  },
};
