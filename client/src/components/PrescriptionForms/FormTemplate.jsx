import React from "react";
import SoftBox from "../SoftBox";
import {BasicInformation, Vitals} from "./PatientInfo/index";
import {Advice, Symptoms} from "./Diagnosis/index";
import Medicines from "./Medicines/Medicines";
import Tests from "./Tests/Tests";

function FormTemplate(props) {
  function renderTemplate(props) {
    switch (props.type) {
      case "basicInformation":
        return <BasicInformation />;
      case "vitals":
        return <Vitals />;
      case "symptoms":
        return <Symptoms />
      case "medicines":
        return <Medicines/>
      case "tests":
        return <Tests />
      case "advice":
        return <Advice />
      default:
        return "Template missing";
    }
  }

  return (
    <>
      <SoftBox
        bgColor="grey-500"
        color="dark"
        sx={{
          width: props.width,
          height: 50,
          borderRadius: 1,
          border: 1,
          ml: 2,
          mb: 0.5,
          mt: (props.mt?props.mt:1)
        }}
      >
        <h5 style={{ textAlign: "left", padding: "10px" }}>
          {props.formHeading}
        </h5>
      </SoftBox>
      <SoftBox
        bgColor="grey-200"
        color="dark"
        sx={{
          width: props.width,
          height: props.contentHeight,
          borderRadius: 1,
          border: 1,
          ml: 2,
          mb: 2
        }}
      >
        {renderTemplate(props)}
      </SoftBox>
    </>
  );
}

export default FormTemplate;
