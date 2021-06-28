const { mata_kuliah, program_studi } = require("../../models"); // Import all models
// const validator = require("validator"); // Import validator

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    // Find data before create
    // to avoid duplicate data
    let findData = await mata_kuliah.findOne({
      where: { kode: req.body.kode },
    });

    // if findData exists, then the proccess will stop in validator
    if (findData) {
      errors.push(`Courses with code ${req.body.kode} has already created`);
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
    // validate study program code
    let findData = await program_studi.findOne({
      where: { kode: req.body.kode_program_studi },
    });

    if (req.body.kode_program_studi && !findData) {
      return res.status(404).json({
        message: `Study program with code ${req.body.kode_program_studi} not found`,
      });
    } else if (findData) {
      req.body.id_program_studi = findData.id;
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.findById = async (req, res, next) => {
  try {
    // check whether the data exists or not
    let findData = await mata_kuliah.findOne({
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
