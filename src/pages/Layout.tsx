import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
