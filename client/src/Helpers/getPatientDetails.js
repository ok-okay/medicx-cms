export async function getPatientDetails(patientId) {
  let patientInfo;
  await fetch("/api/patients/" + patientId)
    .then(async function (response){
      const res = await response.json();
      if(response.status===200 || response.status===404){
        patientInfo = res.patientDetails;
      }
      else{
        console.log(res.error)
      }
    })
    .catch((error) => console.log("error", error));
  return patientInfo;
}