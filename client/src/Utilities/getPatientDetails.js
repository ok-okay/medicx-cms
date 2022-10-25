export function getPatientDetails(patientId, setPatientInfo) {
  fetch("/api/patients/" + patientId)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
      setPatientInfo(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
}
