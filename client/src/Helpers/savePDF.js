import jsPDF from "jspdf";

export function savePDF(patientId, prescriptionId, patientInfo, prescription) {
  console.log(patientId, prescriptionId, patientInfo, prescription);
  if (patientId !== "") {
    const doc = new jsPDF();
    let text, i = 2;

    doc.text("Patient Id: " + patientId, 10, 10);
    doc.text("Prescription Id: " + prescriptionId, 10, 20);

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
}