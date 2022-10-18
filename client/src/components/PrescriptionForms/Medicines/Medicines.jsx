import React, { useState } from "react";
import SoftBox from "components/SoftBox";
import MedicineEntry from "./MedicineEntry";
import SoftButton from "components/SoftButton";

export default function Medicines() {
  const style = {
    width: "80px",
    height: 30,
    borderRight: "2px solid",
    borderBottom: "2px solid",
  };

  const [medicines, setMedicines] = useState([
    { medicine: "", dosage: "", timing: "", duration: "" },
  ]);

  function deleteMedicine(id) {
    let tempMedicines = [...medicines];
    if (tempMedicines.length > 1) {
      tempMedicines.splice(id - 1, 1);
    }
    setMedicines(tempMedicines);
  }

  function setMedicine(id, name, value) {
    const prevValue = [...medicines];
    prevValue[id - 1][name] = value;
    setMedicines(prevValue);
  }

  function addMedicine() {
    setMedicines((prevValue) => {
      return [
        ...prevValue,
        { medicine: "", dosage: "", timing: "", duration: "" },
      ];
    });
  }

  let id = 0;
  return (
    <div>
      <table>
        <tr style={{fontSize: "15px", textAlign: "center"}}>
          <th>
            <SoftBox sx={style}>
              <p>#</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "350px" }}>
              <p>Medicine</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "200px" }}>
              <p>Dosage</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "200px" }}>
              <p>Timing</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "200px" }}>
              <p>Duration(days)</p>
            </SoftBox>
          </th>
          <th>
            <SoftBox sx={{ ...style, width: "120px", borderRight: 0 }}>
              <p>Delete</p>
            </SoftBox>
          </th>
        </tr>
        {medicines.map((medicine) => {
          id = id + 1;
          return (
            <MedicineEntry
              medicine={medicine}
              deleteMedicine={deleteMedicine}
              id={id}
              setMedicine={setMedicine}
              key={id}
            />
          );
        })}
      </table>
      <SoftButton color="dark" sx={{ m: 1 }} onClick={addMedicine}>
        Add medicine
      </SoftButton>
    </div>
  );
}
