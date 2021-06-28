const { krs, mahasiswa, mata_kuliah } = require("../../models"); // Import all models
// const validator = require("validator"); // Import validator

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    // find mahasiswa by NIM
    let dataMahasiswa = await mahasiswa.findOne({
      where: { NIM: req.body.NIM },
    });

    if (!dataMahasiswa) {
      errors.push(`Student with NIM ${req.body.NIM} is not found`);
    }

    let dataMataKuliah = await mata_kuliah.findOne({
      where: { kode: req.body.kode_mata_kuliah },
    });

    if (!dataMataKuliah) {
      errors.push(
        `Courses with code ${req.body.kode_mata_kuliah} does not exist`
      );
    }

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    req.body.id_mahasiswa = dataMahasiswa.id;
    req.body.id_mata_kuliah = dataMataKuliah.id;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    let errors = [];

    let isExists = await krs.findOne({
      where: { id: req.params.id },
    });

    if (!isExists) {
      return res.status(404).json({
        message: "Data not found",
      });
    }

    // validate if req.body.NIM is valid or not
    if (req.body.NIM) {
      let findData = await mahasiswa.findOne({
        where: { NIM: req.body.NIM },
      });

      if (findData) {
        req.body.id_mahasiswa = findData.id;
      } else {
        errors.push(`Student with NIM ${req.body.NIM} does not exist`);
      }
    }

    // validate if req.body.kode_mata_kuliah valid or not
    if (req.body.kode_mata_kuliah) {
      let findData = await mata_kuliah.findOne({
        where: { kode: req.body.kode_mata_kuliah },
      });
      if (findData) {
        req.body.id_mata_kuliah = findData.id;
      } else {
        errors.push(
          `Courses with code ${req.body.kode_mata_kuliah} does not exist`
        );
      }
    }
    if (errors.length > 0) {
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
