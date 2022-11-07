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

	const response = await fetch("/api/patients", requestOptions)
	try{
		const res = await response.json();
		if(response.status===200){
			myPatientId = res.patientId;
		}
		else{
			console.log(res.error);
		}
	}
	catch(error){
		console.log("error", error)
	};

	return myPatientId;
}