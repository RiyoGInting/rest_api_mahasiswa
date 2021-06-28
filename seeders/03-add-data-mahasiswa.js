"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("mahasiswa", [
      {
        nama: "Budi",
        NIM: "0989876573",
        tanggal_lahir: "06 September 1995",
        tempat_lahir: "Medan",
        tahun_masuk: "Oktober 2020",
        kode_program_studi: "KED",
        id_program_studi: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Ani",
        NIM: "0987876545",
        tanggal_lahir: "06 Maret 1994",
        tempat_lahir: "Medan",
        tahun_masuk: "Oktober 2019",
        kode_program_studi: "TEK",
        id_program_studi: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Joko",
        NIM: "0989878767",
        tanggal_lahir: "23 Mei 1992",
        tempat_lahir: "Medan",
        tahun_masuk: "September 2019",
        kode_program_studi: "PTN",
        id_program_studi: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("mahasiswa", null, {});
  },
};
