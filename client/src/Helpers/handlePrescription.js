import {
  addPatient,
  extractPatientInfo,
  extractPrescriptionData,
  addPrescription,
  savePDF,
  putPatientInfo
} from "./index";

export async function handlePrescription(formData) {
  const patientInfo = extractPatientInfo(formData);
  const prescription = extractPrescriptionData(formData);
  let patientId = "",
    prescriptionId = "";
  if (patientInfo.patientName !== "") {
    if (formData.patientId.value === "") {
      patientId = await addPatient(patientInfo);
      prescriptionId = await addPrescription(patientId, prescription);
    } else {
      patientId = formData.patientId.value;
      await putPatientInfo(patientId, patientInfo);
      prescriptionId = await addPrescription(patientId, prescription);
    }
    savePDF(patientId, prescriptionId, patientInfo, prescription);
  }
}