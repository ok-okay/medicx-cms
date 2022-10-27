export async function addPatient(patientInfo) {
  let myPatientId = "";
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
  await fetch("/api/patients", requestOptions)
    .then((addPatientResponse) => addPatientResponse.text())
    .then((patientId) => myPatientId=patientId)
    .catch((error) => console.log("error", error));
  
  return myPatientId;
}
