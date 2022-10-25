export function extractPatientInfo(formData) {
  const patientInfo = {
    patientName: formData.patientName.value,
    patientGender: formData.patientGender.value,
    patientAge: formData.patientAge.value,
    patientEmail: formData.patientEmail.value,
    patientPhone: formData.patientPhone.value,
    patientHeight: formData.patientHeight.value,
    patientWeight: formData.patientWeight.value,
    patientBMI: formData.patientBMI.value,
    patientTemp: formData.patientTemp.value,
    patientBP: formData.patientBP.value,
    patientSPO2: formData.patientSPO2.value,
  };
  return patientInfo;
}
