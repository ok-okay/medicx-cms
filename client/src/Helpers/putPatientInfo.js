export async function putPatientInfo(patientId, patientInfo) {
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
    const response = fetch("/api/patients/" + patientId, requestOptions)
    try {
        const res = await response.json();
        if (response.status === 200) {
            console.log(res.patient);
        } else {
            console.log(res.error);
        }
    }
    catch(error){
        console.log("error", error);
    }
}