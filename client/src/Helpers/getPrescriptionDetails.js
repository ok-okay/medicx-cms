export async function getPrescriptionDetails(prescriptionId) {
	let prescriptionDetails;
	const response = await fetch("/api/prescriptions/" + prescriptionId)
	try {
		const res = await response.json();
		if (response.status === 200 || response.status === 404) {
			prescriptionDetails = {
				patientId: res.patientId,
				prescription: res.prescription
			}
		} else {
			prescriptionDetails = {
				patientId: "",
				prescription: {}
			}
			console.log(res.error);
		}
	}
	catch(error){
		console.log("error", error);
	}

	return prescriptionDetails;
}