import React, { useState } from "react";
import PatientInfo from "./PatientInfo/PatientInfo";
import DoctorAnalysis from "./Diagnosis/DoctorAnalysis";
import SoftButton from "components/SoftButton";
import PatientID from "./PatientID";
import { PatientInfoContext } from "./PatientInfo/PatientInfoContext";
import { handlePrescription } from "Utilities/handlePrescription";

export default function PrescriptionPage() {
  const [patientInfo, setPatientInfo] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    handlePrescription(event.target);
  }
  return (
    <form type="submit" onSubmit={handleSubmit}>
      <PatientInfoContext.Provider value={{patientInfo, setPatientInfo}}>
        <PatientID />
        <PatientInfo />
      </PatientInfoContext.Provider>
      <DoctorAnalysis />
      <SoftButton size="large" color="dark" sx={{ m: 2 }} type="submit">
        Print Prescription
      </SoftButton>
    </form>
  );
}
