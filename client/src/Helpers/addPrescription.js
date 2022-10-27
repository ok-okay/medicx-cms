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
    .then(async function (response) {
      const res = await response.json();
      if (response.status === 200) {
        myPrescriptionId = res.prescriptionId;
      } else {
        console.log(res.error);
      }
    })
    .catch((error) => console.log("error", error));

  return myPrescriptionId;
}