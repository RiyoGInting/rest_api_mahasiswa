const { krs, mahasiswa, mata_kuliah, program_studi } = require("../models");

// mata_kuliah and program_studi relationship
program_studi.hasMany(mata_kuliah, { foreignKey: "id_program_studi" });
mata_kuliah.belongsTo(program_studi, { foreignKey: "id_program_studi" });

// mahasiswa and program_studi relationship
program_studi.hasMany(mahasiswa, { foreignKey: "id_program_studi" });
mahasiswa.belongsTo(program_studi, { foreignKey: "id_program_studi" });

// krs and mahasiswa relationship
mahasiswa.hasOne(krs, { foreignKey: "id_mahasiswa" });
krs.belongsTo(mahasiswa, { foreignKey: "id_mahasiswa" });

// krs and mata_kuliah relationship
mata_kuliah.hasMany(krs, { foreignKey: "id_mata_kuliah" });
krs.belongsTo(mata_kuliah, { foreignKey: "id_mata_kuliah" });
