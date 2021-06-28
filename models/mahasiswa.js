"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mahasiswa.init(
    {
      nama: DataTypes.STRING,
      NIM: DataTypes.STRING,
      tanggal_lahir: DataTypes.STRING,
      tempat_lahir: DataTypes.STRING,
      tahun_masuk: DataTypes.STRING,
      kode_program_studi: DataTypes.STRING,
      id_program_studi: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      modelName: "mahasiswa",
    }
  );
  return mahasiswa;
};
