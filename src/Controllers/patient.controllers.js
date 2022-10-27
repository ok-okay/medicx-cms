const Patient = require("../Models/patient");

const createPatient = (req, res) => {
    const patientDetails = req.body.patientDetails;
    Patient.countDocuments({}, (err, count) => {
        if (!err) {
            const newPatient = new Patient({
                patientId: String(count + 1),
                patientDetails: patientDetails
            })
            newPatient.save();
            return res.status(200).json({
                message: "Patient created",
                patientId: String(count + 1)
            });
        } else {
            return res.status(500).json({
                error: err,
            });
        }
    })
};

const getpatient = (req, res) => {
    const patientId = req.params.patientId;
    Patient.find({
        patientId: patientId
    }, (err, docs) => {
        if (!err) {
            try {
                return res.status(200).json({
                    message: "Patient found",
                    patientDetails: docs[0].patientDetails
                });
            } catch {
                return res.status(404).json({
                    message: "Patient not found",
                    patientDetails: {}
                });
            }
        } else {
            return res.status(500).json({
                error: err,
            });
        }
    })
};

const modifyPatient = (req, res) => {
    const patientId = req.params.patientId;
    const patientDetails = req.body.patientDetails;

    Patient.findOneAndUpdate({
        patientId: patientId
    }, {
        patientDetails: patientDetails
    }, (err, doc) => {
        if (!err) {
            return res.status(200).json({
                message: "Patient modified",
                patient: doc
            });
        } else {
            return res.status(500).json({
                error: err,
            });
        }
    })
};

module.exports = {
    createPatient,
    getpatient,
    modifyPatient
};