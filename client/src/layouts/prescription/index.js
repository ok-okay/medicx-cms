import PrescriptionLayout from "examples/LayoutContainers/PrescriptionLayout";
import PrescriptionNavbar from "examples/Navbars/PrescriptionNavbar";
import PrescriptionPage from "components/PrescriptionForms/PrescriptionPage";
import Footer from "examples/Footer";

function Prescription() {
  return (
    <PrescriptionLayout>
      <PrescriptionNavbar />
        <PrescriptionPage />
      <Footer href="https://medicx.in/" brandName="MedicX Healthtech"/>
    </PrescriptionLayout>
  );
}

export default Prescription;
