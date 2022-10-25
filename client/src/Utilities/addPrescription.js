export async function addPrescription(patientId, prescription) {
  let myPrescriptionId = "";
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

  await fetch("/api/prescriptions", requestOptions)
    .then((addPrescriptionResponse) => addPrescriptionResponse.text())
    .then((prescriptionId) => myPrescriptionId=prescriptionId);
  
  return myPrescriptionId;
}
