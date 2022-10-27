const express = require("express");
const router = express.Router();
const prescriptionControllers = require("../Controllers/prescription.controllers");

router.post("/", prescriptionControllers.createPrescription);
router.get("/:prescriptionId", prescriptionControllers.getPrescription);

module.exports = router;