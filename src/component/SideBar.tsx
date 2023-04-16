import * as React from "react";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import avatar from "../assets/avatar.png";
import CalendarIcon from "../assets/calendarIcon";
import CameraIcon from "../assets/cameraIcon";
import ChatIcon from "../assets/chatIcon";
import LogoIcon from "../assets/logo";
import LogoutIcon from "../assets/logout";
import MusicIcon from "../assets/musicIcon";
import SettingIcon from "../assets/setting";
import WordIcon from "../assets/wordIcon";

const IconBtn = styled(IconButton)(({ theme }) => ({
  marginTop: 8,
  borderRadius: "16px",
  background: "none",
  "& #svgIcon": {
    fill: "green",
  },
  ":hover": {
    background: "green",
    "& #svgIcon": {
      fill: "white",
    },
  },
}));

const Sidebar: React.FC = () => {
  return (
    <MuiDrawer
      sx={{
        width: 54,
        "& .MuiPaper-root": {
          background: "#FAFAFA",
          width: 54,
          margin: "auto",
          justifyContent: "space-between",
        },
        display: "flex",
      }}
      variant="permanent"
      open={false}
    >
      <Box sx={{ display: "flex", marginX: "auto", flexDirection: "column" }}>
        <LogoIcon />
        <img src={avatar} style={{ marginBottom: 16, marginTop: 8 }} />
        <Divider />
        <IconBtn>
          <WordIcon />
        </IconBtn>
        <IconBtn>
          <ChatIcon />
        </IconBtn>
        <IconBtn>
          <CameraIcon />
        </IconBtn>
        <IconBtn>
          <MusicIcon />
        </IconBtn>
        <IconBtn>
          <CalendarIcon />
        </IconBtn>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginX: "auto",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <IconButton>
          <SettingIcon />
        </IconButton>
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </Box>
    </MuiDrawer>
  );
};

export default Sidebar;
