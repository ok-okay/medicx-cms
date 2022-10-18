import React, { useState } from "react";
import SoftBox from "components/SoftBox";
import TestEntry from "./TestEntry";
import SoftButton from "components/SoftButton";

export default function Tests() {
  const style = {
    width: "80px",
    height: 30,
    borderRight: "2px solid",
    borderBottom: "2px solid",
  };

  const [tests, setTests] = useState([{ test: "" }]);

  function deleteTest(id) {
    let tempTests = [...tests];
    if (tempTests.length > 1) {
      tempTests.splice(id - 1, 1);
    }
    setTests(tempTests);
  }

  function setTest(id, name, value) {
    const prevValue = [...tests];
    prevValue[id - 1][name] = value;
    setTests(prevValue);
  }

  function addTest() {
    setTests((prevValue) => {
      return [
        ...prevValue,
        {test: ""},
      ];
    });
  }

  let id = 0;
  return (
    <div>
      <table>
        <tr style={{ fontSize: "15px", textAlign: "center" }}>
          <th>
            <SoftBox sx={style}>
              <p>#</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "950px" }}>
              <p>Test/Diagnosis Name</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "120px", borderRight: 0 }}>
              <p>Delete</p>
            </SoftBox>
          </th>
        </tr>
        {tests.map((test) => {
          id = id + 1;
          return (
            <TestEntry
              test={test}
              deleteTest={deleteTest}
              id={id}
              setTest={setTest}
              key={id}
            />
          );
        })}
      </table>
      <SoftButton color="dark" sx={{ m: 1 }} onClick={addTest}>
        Add test
      </SoftButton>
    </div>
  );
}
