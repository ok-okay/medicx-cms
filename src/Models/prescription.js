const mongoose = require("mongoose");

const prescriptionSchema = {
    prescriptionId: String,
    patientId: String,
    prescription: Object
};

module.exports = mongoose.model("Prescription", prescriptionSchema);