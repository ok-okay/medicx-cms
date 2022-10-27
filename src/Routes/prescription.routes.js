const express = require("express");
const router = express.Router();
const prescriptionControllers = require("../Controllers/prescription.controllers");

router.post("/api/prescriptions", prescriptionControllers.createPrescription);
router.get("/api/prescriptions/:prescriptionId", prescriptionControllers.getPrescription);

module.exports = router;