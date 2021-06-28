const { program_studi } = require("../models"); // Import models

class ProgramStudiController {
  // create a new study program
  async create(req, res) {
    try {
      // Create data
      let studyProgram = await program_studi.create(req.body);

      // Find the new transaksi
      let data = await program_studi.findOne({
        where: { id: studyProgram.id },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama"],
      });

      // If success send data as response
      return res.status(201).json({
        message: "Study Program successfully Created",
        data,
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  // Get all program studi data
  async getAll(req, res) {
    try {
      let data = await program_studi.findAll({
        // only this attributes will send as response
        attributes: ["id", "kode", "nama"],
      });

      // If data does not exist
      if (data.length === 0) {
        return res.status(404).json({
          message: "Data Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  async getOne(req, res) {
    try {
      let data = await program_studi.findOne({
        where: { id: req.params.id },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama"],
      });

      if (!data) {
        return res.status(404).json({ message: "Data not found" });
      }
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  // Update study program
  async update(req, res) {
    try {
      let dataUpdate = await program_studi.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      let data = await program_studi.findOne({
        where: {
          id: req.params.id,
        },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama"],
      });

      return res.status(201).json({
        message: "Study Program successfully updated",
        data,
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  // Delete study program data
  async delete(req, res) {
    try {
      // Delete data
      await program_studi.destroy({ where: { id: req.params.id } });

      // If successful
      return res.status(200).json({
        message: "Study program deleted",
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}

module.exports = new ProgramStudiController();
