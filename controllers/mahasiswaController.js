const { mahasiswa, program_studi } = require("../models"); // Import models

class MahasiswaController {
  // create mahasiswa
  async create(req, res) {
    try {
      // Create data
      let createdData = await mahasiswa.create(req.body);

      // Find the new transaksi
      let data = await mahasiswa.findOne({
        where: { id: createdData.id },
        // this attributes will not send as response
        attributes: {
          exclude: [
            "kode_program_studi",
            "id_program_studi",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
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
        message: "success",
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

  // Get all mahasiswa data
  async getAll(req, res) {
    try {
      let data = await mahasiswa.findAll({
        // this attributes will not send as response
        attributes: {
          exclude: [
            "kode_program_studi",
            "id_program_studi",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
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

  // get one data mahasiswa
  async getOne(req, res) {
    try {
      let data = await mahasiswa.findOne({
        where: { id: req.params.id },
        // this attributes will not send as response
        attributes: {
          exclude: [
            "kode_program_studi",
            "id_program_studi",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
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
      // if success send data as response
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

  // Update mahasiswa
  async update(req, res) {
    try {
      let dataUpdate = await mahasiswa.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      let data = await mahasiswa.findOne({
        where: {
          id: req.params.id,
        },
        // this attributes will not send as response
        attributes: {
          exclude: [
            "kode_program_studi",
            "id_program_studi",
            "createdAt",
            "updatedAt",
            "deletedAt",
          ],
        },
        // join table
        include: [
          {
            model: program_studi,
            attributes: ["id", "kode", "nama"],
          },
        ],
      });

      return res.status(201).json({
        message: "Student data has been successfully updated",
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

  // Delete data mahasiswa
  async delete(req, res) {
    try {
      // Delete data
      await mahasiswa.destroy({ where: { id: req.params.id } });

      // If successful
      return res.status(200).json({
        message: "Success deleted student data",
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

module.exports = new MahasiswaController();
