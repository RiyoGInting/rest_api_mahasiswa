const { mahasiswa, program_studi } = require("../../models"); // Import all models
// const validator = require("validator"); // Import validator

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    // to validate req.body.nama
    let hasNumber = /\d/;
    let name = req.body.nama;

    // if req.body.nama contain any number it will throw error
    if (hasNumber.test(name) == true) {
      errors.push("name cannot contain any number");
    }

    // find study program before creat
    let studyProgram = await program_studi.findOne({
      where: { kode: req.body.kode_program_studi },
    });

    if (!studyProgram) {
      errors.push(
        `Study program with code ${req.body.kode_program_studi} is not found`
      );
    }

    if (errors.length > 0) {
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    req.body.id_program_studi = studyProgram.id;

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

    // to validate req.body.nama
    let hasNumber = /\d/;
    let name = req.body.nama;

    // if req.body.nama contain any number it will throw error
    if (req.body.nama && hasNumber.test(name) == true) {
      errors.push("name cannot contain any number");
    }

    // find study program before update
    if (req.body.kode_program_studi) {
      let studyProgram = await program_studi.findOne({
        where: { kode: req.body.kode_program_studi },
      });
      if (!studyProgram) {
        errors.push(
          `Study program with code ${req.body.kode_program_studi} is not found`
        );
      } else if (studyProgram) {
        req.body.id_program_studi = studyProgram.id;
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

// find data mahasiswa
exports.findById = async (req, res, next) => {
  try {
    // check whether the data exists or not
    let findData = await mahasiswa.findOne({
      where: { id: req.params.id },
    });

    // if data does not exist
    if (!findData) {
      return res.status(404).json({
        message: "Data not found",
      });
    }

    // if data exists
    // go to controller
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
