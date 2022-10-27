const express = require("express");
const router = express.Router();
const patientControllers = require("../Controllers/patient.controllers");

router.post("/", patientControllers.createPatient);
router.get("/:patientId", patientControllers.getpatient);
router.put("/:patientId", patientControllers.modifyPatient);

module.exports = router;