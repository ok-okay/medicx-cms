const mongoose = require("mongoose");

const patientSchema = {
    patientId: String,
    patientDetails: Object
};

module.exports = mongoose.model("Patient", patientSchema);