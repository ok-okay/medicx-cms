export async function getPatientDetails(patientId) {
  let patientInfo;
  await fetch("/api/patients/" + patientId)
    .then((response) => response.text())
    .then((result) => {
      patientInfo = JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
  return patientInfo;
}