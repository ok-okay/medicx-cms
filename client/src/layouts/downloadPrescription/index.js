import PrescriptionLayout from "examples/LayoutContainers/PrescriptionLayout";
import PrescriptionNavbar from "examples/Navbars/PrescriptionNavbar";
import DownloadPrescriptionPage from "components/DownloadPrescription/DownloadPrescriptionPage";
import Footer from "examples/Footer";

function DownloadPrescription() {
  return (
    <PrescriptionLayout>
      <PrescriptionNavbar />
        <DownloadPrescriptionPage />
      <Footer href="https://medicx.in/" brandName="MedicX Healthtech"/>
    </PrescriptionLayout>
  );
}

export default DownloadPrescription;

