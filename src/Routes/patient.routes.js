const express = require("express");
const router = express.Router();
const patientControllers = require("../Controllers/patient.controllers");

router.post("/api/patients", patientControllers.createPatient);
router.get("/api/patients/:patientId", patientControllers.getpatient);
router.put("/api/patients/:patientId", patientControllers.modifyPatient);

module.exports = router;