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
    fetch("/api/patients/" + patientId, requestOptions)
        .then(async function (response) {
            const res = await response.json();
            if (response.status === 200) {
                console.log(res.patient);
            } else {
                console.log(res.error);
            }
        })
        .catch((error) => console.log("error", error));
}