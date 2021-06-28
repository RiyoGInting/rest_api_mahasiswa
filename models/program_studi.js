"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class program_studi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  program_studi.init(
    {
      kode: DataTypes.STRING,
      nama: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      modelName: "program_studi",
    }
  );
  return program_studi;
};
