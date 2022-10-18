import Prescription from "layouts/prescription";
import DownloadPrescription from "layouts/downloadPrescription";
// import Shop from "examples/Icons/Shop";
import Icon from "@mui/material/Icon"

const routes = [
  {
    name: "Prescription",
    key: "prescription",
    route: "/prescription",
    icon: <Icon>create</Icon>,
    component: <Prescription />
  },
  {
    name: "Download Prescription",
    key: "downloadPrescription",
    route: "/downloadPrescription",
    icon: <Icon>download</Icon>,
    component: <DownloadPrescription />
  }
];

export default routes;
