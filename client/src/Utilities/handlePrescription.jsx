import { addPatient } from "./addPatient";
import { extractPatientInfo } from "./extractPatientInfo";
import { extractPrescriptionData } from "./extractPrescriptionData";
import { addPrescription } from "./addPrescription";

export async function handlePrescription(formData) {
  const patientInfo = extractPatientInfo(formData);
  const prescription = extractPrescriptionData(formData);

  if (formData.patientId.value === "") {
    addPatient(patientInfo, prescription);
  } else {
    addPrescription(formData.patientId.value, prescription);
  }
}
