const Prescription = require("../Models/prescription");

const createPrescription = (req, res) => {
    const patientId = req.body.patientId;
    const prescription = req.body.prescription;
    Prescription.countDocuments({}, (err, count) => {
        if (!err) {
            const newPrescription = new Prescription({
                patientId: patientId,
                prescription: prescription,
                prescriptionId: String(count + 1)
            })
            newPrescription.save();
            return res.status(200).json({
                message: "Prescription created",
                prescriptionId: String(count + 1)
            });
        } else {
            return res.status(500).json({
                error: err,
            });
        }
    })
};

const getPrescription = (req, res) => {
    const prescriptionId = req.params.prescriptionId;
    Prescription.find({
        prescriptionId: prescriptionId
    }, (err, docs) => {
        if (!err) {
            try {
                const patientId = docs[0].patientId;
                const prescription = docs[0].prescription;
                return res.status(200).json({
                    message: "Prescription Found",
                    patientId: patientId,
                    prescription: prescription
                });
            } catch {
                return res.status(404).json({
                    message: "Prescription not found",
                    patientId: "",
                    prescription: {}
                });
            }
        } else {
            return res.status(500).json({
                error: err,
            });
        }
    })
};

module.exports = {
    createPrescription,
    getPrescription
};