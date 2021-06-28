const express = require("express"); // Import express
const router = express.Router(); // Make a router

// // Import validator
const mataKuliahValidator = require("../middlewares/validators/mataKuliahValidator");

// Import controller
const mataKuliahController = require("../controllers/mataKuliahController");

router.get("/", mataKuliahController.getAll);
router.get("/listCourses", mataKuliahController.listCourses);
router.get("/:id", mataKuliahController.getOne);
router.post("/", mataKuliahValidator.create, mataKuliahController.create);
router.put("/:id", mataKuliahValidator.update, mataKuliahController.update);
router.delete(
  "/:id",
  mataKuliahValidator.findById,
  mataKuliahController.delete
);

module.exports = router; // Export router
