import React, { useContext, useState, useEffect } from "react";
import FormInput from "components/SoftInput/FormInput";
import { PatientInfoContext } from "../../../context/PatientInfoContext";

export default function Vitals(props) {
  const { patientInfo } = useContext(PatientInfoContext);
  const [vitals, setVitals] = useState(patientInfo);

  useEffect(() => {
    setVitals(patientInfo);
  }, [patientInfo]);

  return (
    <table>
      <tr>
        <th>
          <FormInput
            width="150px"
            label="Height (cm):"
            name="patientHeight"
            value={vitals.patientHeight===undefined?"":vitals.patientHeight}
            type="patientInfo"
          />
        </th>
        <th style={{ position: "relative", left: "15px" }}>
          <FormInput
            width="150px"
            label="Weight:"
            name="patientWeight"
            value={vitals.patientWeight===undefined?"":vitals.patientWeight}
            type="patientInfo"
          />
        </th>
        <th style={{ position: "relative", left: "20px" }}>
          <FormInput
            width="150px"
            label="BMI:"
            name="patientBMI"
            value={(
              parseFloat(vitals.patientWeight) /
              Math.pow(parseFloat(vitals.patientHeight) / 100, 2)
            ).toFixed(1)}
          />
        </th>
      </tr>
      <th style={{ position: "relative", top: "70px" }}>
        <FormInput
          width="150px"
          label="Temperature (&deg;F):"
          name="patientTemp"
          value={vitals.patientTemp===undefined?"":vitals.patientTemp}
          type="patientInfo"
        />
      </th>
      <th style={{ position: "relative", left: "15px", top: "70px" }}>
        <FormInput
          width="150px"
          label="Blood Pressure:"
          name="patientBP"
          value={vitals.patientBP===undefined?"":vitals.patientBP}
          type="patientInfo"
        />
      </th>
      <th style={{ position: "relative", left: "20px", top: "70px" }}>
        <FormInput
          width="150px"
          label="SPO2:"
          name="patientSPO2"
          value={vitals.patientSPO2===undefined?"":vitals.patientSPO2}
          type="patientInfo"
        />
      </th>
    </table>
  );
}
