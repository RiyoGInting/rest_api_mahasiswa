const { krs, mahasiswa, mata_kuliah } = require("../models"); // Import models

class KrsController {
  // create krs
  async create(req, res) {
    try {
      // Create data
      let createdData = await krs.create(req.body);

      // Find the new krs
      let data = await krs.findOne({
        where: { id: createdData.id },
        // only this attributes will send as response
        attributes: ["id", "NIM", "kode_mata_kuliah"],
        // join table
        include: [
          {
            model: mahasiswa,
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
          },
          {
            model: mata_kuliah,
            // only this attributes will send as response
            attributes: ["id", "kode", "nama", "SKS"],
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

  // Get all krs
  async getAll(req, res) {
    try {
      let data = await krs.findAll({
        // only this attributes will send as response
        attributes: ["id", "NIM", "kode_mata_kuliah"],
        // join table
        include: [
          {
            model: mahasiswa,
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
          },
          {
            model: mata_kuliah,
            // only this attributes will send as response
            attributes: ["id", "kode", "nama", "SKS"],
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

  // get one krs
  async getOne(req, res) {
    try {
      let data = await krs.findOne({
        where: { id: req.params.id },
        // only this attributes will send as response
        attributes: ["id", "NIM", "kode_mata_kuliah"],
        // join table
        include: [
          {
            model: mahasiswa,
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
          },
          {
            model: mata_kuliah,
            // only this attributes will send as response
            attributes: ["id", "kode", "nama", "SKS"],
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
      let dataUpdate = await krs.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      let data = await krs.findOne({
        where: {
          id: req.params.id,
        },
        // only this attributes will send as response
        attributes: ["id", "NIM", "kode_mata_kuliah"],
        // join table
        include: [
          {
            model: mahasiswa,
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
          },
          {
            model: mata_kuliah,
            // only this attributes will send as response
            attributes: ["id", "kode", "nama", "SKS"],
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
      await krs.destroy({ where: { id: req.params.id } });

      // If successful
      return res.status(200).json({
        message: "Krs has been deleted",
      });
    } catch (error) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  async totalSks(req, res) {
    try {
      let dataMahasiswa = await mahasiswa.findAll({
        where: { nama: req.query.nama },
      });

      let dataKrs = await krs.findAll({
        where: {
          id_mahasiswa: dataMahasiswa[0].id,
        },
        // join table
        include: [
          {
            model: mata_kuliah,
            // only this attributes will send as response
            attributes: ["id", "kode", "nama", "SKS"],
          },
        ],
      });

      // count total sks
      let totalSks = 0;
      dataKrs.forEach((element) => {
        totalSks += element.mata_kuliah.SKS;
      });

      return res.status(200).json({
        message: "Total SKS ",
        data: totalSks,
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

module.exports = new KrsController();
