export function addPrescription(patientId, prescription) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    patientId: patientId,
    prescription: prescription
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  
  fetch("/prescriptions", requestOptions)
    .then((addPrescriptionResponse) => addPrescriptionResponse.text())
    .then((prescriptionId) => console.log(prescriptionId));
}
