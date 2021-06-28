const express = require("express"); // Import express
const router = express.Router(); // Make a router

// // Import validator
const programStudiValidator = require("../middlewares/validators/programStudyValidator");

// Import controller
const programStudiController = require("../controllers/programStudiController");

router.get("/", programStudiController.getAll);
router.get("/:id", programStudiController.getOne);
router.post("/", programStudiValidator.create, programStudiController.create);
router.put(
  "/:id",
  programStudiValidator.findById,
  programStudiController.update
);
router.delete(
  "/:id",
  programStudiValidator.findById,
  programStudiController.delete
);

module.exports = router; // Export router
