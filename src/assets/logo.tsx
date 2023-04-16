import { Box } from "@mui/material";
import React from "react";

function LogoIcon() {
  return (
    <Box py={2} display={"flex"} margin={"auto"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="20"
        fill="none"
        viewBox="0 0 30 20"
      >
        <path
          fill="#27AE60"
          d="M15 18.392a9.733 9.733 0 110-16.784 9.733 9.733 0 110 16.784zm2.27-1.845a7.067 7.067 0 100-13.094A9.697 9.697 0 0119.8 10a9.7 9.7 0 01-2.53 6.547zM12.73 3.453a7.067 7.067 0 100 13.094A9.697 9.697 0 0110.2 10a9.7 9.7 0 012.53-6.547zM15 4.94A7.045 7.045 0 0012.867 10c0 1.984.817 3.776 2.133 5.06A7.045 7.045 0 0017.133 10 7.044 7.044 0 0015 4.94z"
        ></path>
      </svg>
    </Box>
  );
}

export default LogoIcon;
