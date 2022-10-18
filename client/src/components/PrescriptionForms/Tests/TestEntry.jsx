import React from "react";
import Icon from "@mui/material/Icon";

export default function TestEntry(props) {
  const {test} = props.test;
  const style = {
    height: "30px",
    width: "950px",
    borderRadius: 2,
    fontFamily: "inherit",
  };

  function handleClick() {
    props.deleteTest(props.id);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    props.setTest(props.id, name, value);
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <p>{props.id}</p>
      </td>
      <td>
        <input
          type="text"
          name="test"
          style={style}
          value={test}
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
