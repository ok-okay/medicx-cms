import React from "react";
export const PatientInfoContext = React.createContext({
  patientInfo: {
    patientName: "",
    patientGender: "",
    patientAge: "",
    patientEmail: "",
    patientPhone: "",
    patientHeight: "",
    patientWeight: "",
    patientBMI: "",
    patientTemp: "",
    patientBP: "",
    patientSPO2: ""
  },
  setPatientInfo: () => {},
});
