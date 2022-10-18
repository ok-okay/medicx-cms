import React from "react";
import Icon from "@mui/material/Icon";

export default function MedicineEntry(props) {
  const { medicine, dosage, timing, duration } = props.medicine;
  const style = {
    height: "30px",
    width: "350px",
    borderRadius: 2,
    fontFamily: "inherit",
  };

  function handleClick() {
    props.deleteMedicine(props.id);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    props.setMedicine(props.id, name, value);
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <p>{props.id}</p>
      </td>
      <td>
        <input
          type="text"
          name="medicine"
          style={style}
          value={medicine}
          onChange={handleChange}
          autoComplete="off"
        />
      </td>
      <td>
        <input
          type="text"
          name="dosage"
          style={{ ...style, width: "200px" }}
          value={dosage}
          onChange={handleChange}
          autoComplete="off"
        />
      </td>
      <td>
        <input
          type="text"
          name="timing"
          style={{ ...style, width: "200px" }}
          value={timing}
          onChange={handleChange}
          autoComplete="off"
        />
      </td>
      <td>
        <input
          type="text"
          name="duration"
          style={{ ...style, width: "200px" }}
          value={duration}
          onChange={handleChange}
          autoComplete="off"
        />
      </td>
      <td style={{ textAlign: "center", position: "relative", top: "5px" }}>
        <button type="button" onClick={handleClick} style={{ border: 0 }}>
          <Icon sx={{ width: "100px" }} fontSize="medium">
            delete_forever
          </Icon>
        </button>
      </td>
    </tr>
  );
}
