import React, {useState, useContext, useEffect} from "react";
import FormInput from "components/SoftInput/FormInput";
import { PatientInfoContext } from "./PatientInfoContext";

export default function BasicInformation(props) {
  const {patientInfo} = useContext(PatientInfoContext);
  const [basicInfo, setBasicInfo] = useState(patientInfo);

  useEffect(()=>{
    setBasicInfo(patientInfo);
  }, [patientInfo])

  return (
    <table>
      <tr>
        <th>
          <FormInput
            width="300px"
            label="Name:"
            name="patientName"
            value={basicInfo.patientName===undefined?"":basicInfo.patientName}
            type="patientInfo"
          />
        </th>
        <th>
          <FormInput
            width="100px"
            label="Gender:"
            name="patientGender"
            value={basicInfo.patientGender===undefined?"":basicInfo.patientGender}
            type="patientInfo"
          />
        </th>
        <th style={{ position: "relative", right: "90px" }}>
          <FormInput
            width="70px"
            label="Age:"
            name="patientAge"
            value={basicInfo.patientAge===undefined?"":basicInfo.patientAge}
            type="patientInfo"
          />
        </th>
      </tr>
      <tr>
        <th style={{ position: "relative", top: "70px" }}>
          <FormInput
            width="300px"
            label="Email Id:"
            name="patientEmail"
            value={basicInfo.patientEmail===undefined?"":basicInfo.patientEmail}
            type="patientInfo"
          />
        </th>
        <th style={{ position: "relative", top: "70px" }}>
          <FormInput
            width="200px"
            label="Phone Number:"
            name="patientPhone"
            value={basicInfo.patientPhone===undefined?"":basicInfo.patientPhone}
            type="patientInfo"
          />
        </th>
      </tr>
    </table>
  );
}
