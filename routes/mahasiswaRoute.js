const express = require("express"); // Import express
const router = express.Router(); // Make a router

// // Import validator
const mahasiswaValidator = require("../middlewares/validators/mahasiswaValidator");

// Import controller
const mahasiswaController = require("../controllers/mahasiswaController");

router.get("/", mahasiswaController.getAll);
router.get("/:id", mahasiswaController.getOne);
router.post("/", mahasiswaValidator.create, mahasiswaController.create);
router.put(
  "/:id",
  mahasiswaValidator.findById,
  mahasiswaValidator.update,
  mahasiswaController.update
);
router.delete("/:id", mahasiswaValidator.findById, mahasiswaController.delete);

module.exports = router; // Export router
