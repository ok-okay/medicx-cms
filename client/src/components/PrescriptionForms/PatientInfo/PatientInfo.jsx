import React from "react";
import FormTemplate from "../FormTemplate";

export default function PatientInfo() {
  return (
    <table>
      <tr>
        <th>
          <FormTemplate
            width="560px"
            contentHeight="200px"
            formHeading="Patient Details"
            type="basicInformation"
            mt="50px"
          />
        </th>
        <th style={{ position: "relative", left: "20px" }}>
          <FormTemplate
            width="560px"
            contentHeight="200px"
            formHeading="Patient Vitals"
            type="vitals"
            mt="50px"
          />
        </th>
      </tr>
    </table>
  );
}
