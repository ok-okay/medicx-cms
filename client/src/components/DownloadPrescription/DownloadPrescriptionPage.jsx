import React, { useState } from "react";
import {savePDF, getPrescriptionDetails, getPatientDetails} from "Helpers/index";
import FormInput from "components/SoftInput/FormInput";
import SoftButton from "components/SoftButton";

export default function DownloadPrescriptionPage() {
  const [prescriptionId, setPrescriptionId] = useState("");

  async function handleClick(){
    const {patientId, prescription} = await getPrescriptionDetails(prescriptionId);
    const patientInfo = await getPatientDetails(patientId);
    savePDF(patientId, prescriptionId, patientInfo, prescription);
    window.location.reload(false)
  }

  return (
    <div style={{height: "600px"}}>
      <FormInput
        fontSize="20px"
        width="200px"
        name="prescriptionId"
        fontWeight="bold"
        value={prescriptionId}
        placeholder="Enter prescription ID"
        setPrescriptionId={setPrescriptionId}
      />
      <SoftButton
        size="small"
        color="dark"
        sx={{ m: 0, p: 1, position: "relative", bottom: "2px", left: "225px" }}
        type="button"
        onClick={handleClick}
      >
        Download prescription
      </SoftButton>
    </div>
  );
}
