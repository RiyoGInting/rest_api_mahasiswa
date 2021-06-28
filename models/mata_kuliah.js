"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class mata_kuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mata_kuliah.init(
    {
      kode: DataTypes.STRING,
      nama: DataTypes.STRING,
      SKS: DataTypes.INTEGER,
      kode_program_studi: DataTypes.STRING,
      id_program_studi: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      modelName: "mata_kuliah",
    }
  );
  return mata_kuliah;
};
