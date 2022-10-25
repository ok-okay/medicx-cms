import { addPatient } from "./addPatient";
import { extractPatientInfo } from "./extractPatientInfo";
import { extractPrescriptionData } from "./extractPrescriptionData";
import { addPrescription } from "./addPrescription";
import { savePDF } from "./savePDF";
import { putPatientInfo } from "./putPatientInfo";

export async function handlePrescription(formData) {
  const patientInfo = extractPatientInfo(formData);
  const prescription = extractPrescriptionData(formData);
  let patientId="", prescriptionId="";
  if (patientInfo.patientName !== "") {
    if (formData.patientId.value === "") {
      patientId = await addPatient(patientInfo);
      prescriptionId = await addPrescription(patientId, prescription);
    } else {
      patientId = formData.patientId.value;
      putPatientInfo(patientId, patientInfo);
      prescriptionId = await addPrescription(patientId, prescription);
    }
    savePDF(patientId, prescriptionId, patientInfo, prescription);
  }
}
