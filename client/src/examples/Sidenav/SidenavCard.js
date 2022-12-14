import Card from "@mui/material/Card";

// Custom styles for the SidenavCard
import {card} from "examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const {miniSidenav} = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
    </Card>
  );
}

export default SidenavCard;
