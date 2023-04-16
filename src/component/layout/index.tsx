import React from "react";
import Sidebar from "../SideBar";
import { Box } from "@mui/material";
import ChatSidebar from "../ChatSideBar";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <ChatSidebar />
      {children}
    </Box>
  );
};

export default Layout;
