export function addPatient(patientInfo, prescription) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    patientDetails: patientInfo,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  fetch("/api/patients", requestOptions)
    .then((addPatientResponse) => addPatientResponse.text())
    .then((patientId) => {
      requestOptions.body = JSON.stringify({
        prescription: prescription,
        patientId: patientId,
      });
      fetch("/api/prescriptions", requestOptions)
        .then((addPrescriptionResponse) => addPrescriptionResponse.text())
        .then((prescriptionId) => console.log(prescriptionId));
    })
    .catch((error) => console.log("error", error));
}
