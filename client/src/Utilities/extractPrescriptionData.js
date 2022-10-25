export function extractPrescriptionData(formData) {
  let prescription = {
    symptoms: formData.patientSymptoms.value,
    advice: formData.patientAdvice.value,
    medicine: [],
    dosage: [],
    timing: [],
    duration: [],
    test: [],
  };

  if (formData.medicine[0] === undefined) {
    prescription.medicine.push(formData.medicine.value);
    prescription.dosage.push(formData.dosage.value);
    prescription.timing.push(formData.timing.value);
    prescription.duration.push(formData.duration.value);
  } else {
    for (let i = 0; i < formData.medicine.length; i++) {
      prescription.medicine.push(formData.medicine[i].attributes.value.value);
      prescription.dosage.push(formData.dosage[i].attributes.value.value);
      prescription.timing.push(formData.timing[i].attributes.value.value);
      prescription.duration.push(formData.duration[i].attributes.value.value);
    }
  }

  if (formData.test[0] === undefined) {
    prescription.test.push(formData.test.value);
  } else {
    for (let i = 0; i < formData.test.length; i++) {
      prescription.test.push(formData.test[i].attributes.value.value);
    }
  }

  return prescription;
}
