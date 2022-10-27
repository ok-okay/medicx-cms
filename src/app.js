require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const patientRouter = require("./Routes/patient.routes");
const prescriptionRouter = require("./Routes/prescription.routes");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://" + process.env.USER_NAME + ":" + process.env.PASSWORD + "@cluster0.rmjxgjt.mongodb.net/medicxDb");

app.use("/api/patients", patientRouter);
app.use("/api/prescriptions", prescriptionRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));