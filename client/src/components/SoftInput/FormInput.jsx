import React from "react";
import SoftInput from "components/SoftInput";
import InputLabel from "@mui/material/InputLabel";
import SoftBox from "components/SoftBox";

export default function FormInput(props) {
  function handleChange(event) {
    if ("setPatientId" in props) {
      props.setPatientId(event.target.value);
    }
  }

  return (
    <SoftBox
      sx={{
        width: props.width,
        height: 10,
        borderRadius: 1,
        marginLeft: 2,
        p: 1,
      }}
    >
      <InputLabel>
        <p
          style={{
            textAlign: "left",
            fontSize: props.fontSize ? props.fontSize : "15px",
            fontWeight: props.fontWeight,
            paddingLeft: "5px",
          }}
        >
          {props.label}
        </p>
      </InputLabel>
      <SoftInput
        size="small"
        name={props.name}
        autoComplete="off"
        placeholder={props.placeholder}
        multiline
        rows={props.rows}
        style={{ position: "relative", top: "3.5px" }}
        value={props.value}
        onChange={
          props.setPatientId ? handleChange : null
        }
      />
    </SoftBox>
  );
}
