import React, { useState } from "react";
import PatientInfo from "./PatientInfo/PatientInfo";
import DoctorAnalysis from "./Diagnosis/DoctorAnalysis";
import SoftButton from "components/SoftButton";
import PatientID from "./PatientID";
import { PatientInfoContext } from "context/PatientInfoContext";
import { handlePrescription } from "Helpers/index";

export default function PrescriptionPage() {
  const [patientInfo, setPatientInfo] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    await handlePrescription(event.target);
    window.location.reload(false)
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
