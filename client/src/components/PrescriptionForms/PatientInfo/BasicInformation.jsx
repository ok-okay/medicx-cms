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
            value={basicInfo.patientName}
            basicInfo={basicInfo}
          />
        </th>
        <th>
          <FormInput
            width="100px"
            label="Gender:"
            name="patientGender"
            value={basicInfo.patientGender}
            basicInfo={basicInfo}
          />
        </th>
        <th style={{ position: "relative", right: "90px" }}>
          <FormInput
            width="70px"
            label="Age:"
            name="patientAge"
            value={basicInfo.patientAge}
            basicInfo={basicInfo}
          />
        </th>
      </tr>
      <tr>
        <th style={{ position: "relative", top: "70px" }}>
          <FormInput
            width="300px"
            label="Email Id:"
            name="patientEmail"
            value={basicInfo.patientEmail}
            basicInfo={basicInfo}
          />
        </th>
        <th style={{ position: "relative", top: "70px" }}>
          <FormInput
            width="200px"
            label="Phone Number:"
            name="patientPhone"
            value={basicInfo.patientPhone}
            basicInfo={basicInfo}
          />
        </th>
      </tr>
    </table>
  );
}
