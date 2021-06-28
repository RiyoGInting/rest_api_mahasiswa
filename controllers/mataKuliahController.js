const { mata_kuliah, program_studi } = require("../models"); // Import models

class MataKuliahController {
  // create a new courses
  async create(req, res) {
    try {
      // Create data
      let mataKuliah = await mata_kuliah.create(req.body);

      // Find the new transaksi
      let data = await mata_kuliah.findOne({
        where: { id: mataKuliah.id },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama", "SKS"],
        // join table
        include: [
          {
            model: program_studi,
            attributes: ["id", "kode", "nama"],
          },
        ],
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

  // Get all courses data
  async getAll(req, res) {
    try {
      let data = await mata_kuliah.findAll({
        // only this attributes will send as response
        attributes: ["id", "kode", "nama", "SKS"],
        // join table
        include: [
          {
            model: program_studi,
            attributes: ["id", "kode", "nama"],
          },
        ],
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
      let data = await mata_kuliah.findOne({
        where: { id: req.params.id },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama", "SKS"],
        // join table
        include: [
          {
            model: program_studi,
            attributes: ["id", "kode", "nama"],
          },
        ],
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

  // Update
  async update(req, res) {
    try {
      let dataUpdate = await mata_kuliah.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      let data = await mata_kuliah.findOne({
        where: {
          id: req.params.id,
        },
        // only this attributes will send as response
        attributes: ["id", "kode", "nama", "SKS"],
        // join table
        include: [
          {
            model: program_studi,
            attributes: ["id", "kode", "nama"],
          },
        ],
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
      await mata_kuliah.destroy({ where: { id: req.params.id } });

      // If successful
      return res.status(200).json({
        message: "Courses deleted",
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  async listCourses(req, res) {
    try {
      let data = await mata_kuliah.findAll({
        where: { kode_program_studi: req.query.kode_program_studi },
        attributes: ["id", "kode", "nama", "SKS"],
      });

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
}

module.exports = new MataKuliahController();
