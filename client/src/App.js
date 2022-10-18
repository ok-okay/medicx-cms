import {useEffect} from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Soft UI Dashboard React examples
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard React themes
import theme from "assets/theme";

// Soft UI Dashboard React routes
import routes from "routes";

// Images
import brand from "./assets/medicx-logo.webp";

export default function App() {
  const sidenavColor = "secondary";
  const {pathname} = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Sidenav
          color={sidenavColor}
          brand={brand}
          brandName="MedicX Healthtech"
          routes={routes}
        />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/prescription" />} />
      </Routes>
    </ThemeProvider>
  );
}
