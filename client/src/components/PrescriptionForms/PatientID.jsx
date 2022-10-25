import React, { useState, useContext } from "react";
import { PatientInfoContext } from "./PatientInfo/PatientInfoContext";
import FormInput from "components/SoftInput/FormInput";
import SoftButton from "components/SoftButton";
import { getPatientDetails } from "Utilities/getPatientDetails";

export default function PatientID() {
  const [patientId, setPatientId] = useState("");
  const {setPatientInfo} = useContext(PatientInfoContext);
  async function handleClick() {
    setPatientInfo(await getPatientDetails(patientId));
  }
  return (
    <>
      <FormInput
        fontSize="20px"
        width="200px"
        label="Patient ID"
        name="patientId"
        fontWeight="bold"
        value={patientId}
        setPatientId={setPatientId}
        placeholder="Enter patient ID"
      />
      <SoftButton
        size="small"
        color="dark"
        sx={{ m: 0, p: 1, position: "relative", top: "27px", left: "225px" }}
        type="button"
        onClick={handleClick}
      >
        Get patient info
      </SoftButton>
    </>
  );
}
