const express = require("express"); // Import express
const router = express.Router(); // Make a router

// // Import validator
const krsValidator = require("../middlewares/validators/krsValidator");

// Import controller
const krsController = require("../controllers/krsController");

router.get("/", krsController.getAll);
router.get("/totalSks", krsController.totalSks);
router.get("/:id", krsController.getOne);
router.post("/", krsValidator.create, krsController.create);
router.put("/:id", krsValidator.update, krsController.update);
router.delete("/:id", krsController.delete);

module.exports = router; // Export router
