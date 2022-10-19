import { savePDF } from "./savePDF";

export function addPrescription(patientId, patientInfo, prescription) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    patientId: patientId,
    prescription: prescription,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("/api/prescriptions", requestOptions)
    .then((addPrescriptionResponse) => addPrescriptionResponse.text())
    .then((prescriptionId) => {
      savePDF(patientId, prescriptionId, patientInfo, prescription);
    });
}
