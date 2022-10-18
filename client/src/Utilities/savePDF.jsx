import jsPDF from "jspdf";
import { extractPatientInfo } from "./extractPatientInfo";
import { extractPrescriptionData } from "./extractPrescriptionData";

export function savePDF(formData) {
  const doc = new jsPDF();
  const patientInfo = extractPatientInfo(formData);
  const prescription = extractPrescriptionData(formData);
  let text, i=0;
  for (let key in patientInfo) {
    text = key + ": " + patientInfo[key];
    doc.text(text, 10, 10 + i * 10);
    i++;
  }

  for (let key in prescription) {
    text = key + ": " + prescription[key];
    doc.text(text, 10, 10 + i * 10);
    i++;
  }

  doc.save("prescription.pdf");
}
