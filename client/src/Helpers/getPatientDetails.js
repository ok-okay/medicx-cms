export async function getPatientDetails(patientId) {
	let patientInfo;
	const response = await fetch("/api/patients/" + patientId);

	try{
		const res = await response.json();
		if(response.status===200 || response.status===404){
			patientInfo = res.patientDetails;
		}
		else{
			console.log(res.error)
		}
	}
	catch(error){
		console.log("error", error)
	}
	return patientInfo;
}