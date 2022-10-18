require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://"+process.env.USER_NAME+":"+process.env.PASSWORD+"@cluster0.rmjxgjt.mongodb.net/medicxDb");
const prescriptionSchema = {
  prescriptionId: String,
  patientId: String,
  prescription: Object
};

const patientSchema = {
  patientId: String,
  patientDetails: Object
};

const Prescription = mongoose.model("Prescription", prescriptionSchema);
const Patient = mongoose.model("Patient", patientSchema);

app.post("/patients", (req, res)=>{
  Patient.countDocuments({}, (err, count)=>{
    if(!err){
      const newPatient = new Patient({
        patientId: String(count+1),
        patientDetails: req.body.patientDetails
      })
      newPatient.save();
      res.send(String(count+1));
    }
    else{
      console.log(err);
    }
  })
})

app.post("/prescriptions", (req, res)=>{
  Prescription.countDocuments({}, (err, count)=>{
    if(!err){
      const newPrescription = new Prescription({
        patientId: req.body.patientId,
        prescription: req.body.prescription,
        prescriptionId: String(count+1)
      })
      newPrescription.save();
      res.send(String(count+1));
    }
    else{
      console.log(err);
    }
  })
})

app.get("/patients/:patientId", (req, res) => {
  Patient.find({
    patientId: String(req.params.patientId)
  }, (err, docs) => {
    if (!err) {
      try {
        console.log(docs[0].patientDetails);
        res.send(docs[0].patientDetails);
      }
      catch{
        res.send({})
      }
    } else {
      console.log(err);
    }
  })
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
  app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));