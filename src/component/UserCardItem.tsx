import React from "react";
import { IUser } from "../data/type";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DobuleSeenIcon from "../assets/dobuleSeen";
interface UserCardItemProps {
  user: IUser;
}

const UserCardItem: React.FC<UserCardItemProps> = ({ user }) => {
  return (
    <Box
      py={"2px"}
      px={2}
      sx={{
        "& #svgIcon": {
          fill: "green",
        },
        ":hover": {
          bgcolor: "#EEEEEE",
          "& #svgIcon": {
            fill: "white",
          },
        },
      }}
    >
      <Box
        height={54}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar>
            <img src={user.img} />
          </Avatar>
          <Box pl={1}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "16px",
              }}
            >
              {user.name}
            </Typography>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "16px",
              }}
            >
              {user.lastChat}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16px",
            }}
          >
            {user.clock}
          </Typography>
          <DobuleSeenIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardItem;
