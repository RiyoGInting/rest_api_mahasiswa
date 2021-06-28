"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class krs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  krs.init(
    {
      NIM: DataTypes.STRING,
      kode_mata_kuliah: DataTypes.STRING,
      id_mahasiswa: DataTypes.INTEGER,
      id_mata_kuliah: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      modelName: "krs",
    }
  );
  return krs;
};
