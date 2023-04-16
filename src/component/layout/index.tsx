import React from "react";
import Sidebar from "./SideBar";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
