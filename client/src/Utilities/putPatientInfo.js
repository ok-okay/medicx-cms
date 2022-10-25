export function putPatientInfo(patientId, patientInfo) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        patientDetails: patientInfo,
    });

    var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
    };
    fetch("/api/patients/"+patientId, requestOptions)
        .then((putPatientResponse) => putPatientResponse.text())
        .then(putPatientInfo => console.log(putPatientInfo))
        .catch((error) => console.log("error", error));
}