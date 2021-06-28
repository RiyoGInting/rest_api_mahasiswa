const { program_studi } = require("../../models"); // Import all models
// const validator = require("validator"); // Import validator

exports.create = async (req, res, next) => {
  try {
    // Find study program before create
    // to avoid duplicate data
    let findData = await program_studi.findOne({
      where: { kode: req.body.kode },
    });

    if (findData) {
      return res.status(400).json({
        message: `Study Program with code ${req.body.kode} has already created`,
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

exports.findById = async (req, res, next) => {
  try {
    // check whether the data exists or not
    let findData = await program_studi.findOne({
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
