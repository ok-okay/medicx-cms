export async function getPrescriptionDetails(prescriptionId) {
    let prescriptionDetails;
    await fetch("/api/prescriptions/" + prescriptionId)
      .then((response) => response.text())
      .then((result) => {
        prescriptionDetails = JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
    return prescriptionDetails;
  }