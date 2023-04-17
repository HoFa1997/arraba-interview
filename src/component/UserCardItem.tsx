import React from "react";

import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DobuleSeenIcon from "../assets/dobuleSeen";
import { IChat } from "../data/type";
import { useDispatch } from "react-redux";
import { changeChatConv } from "../redux/chatReducer";
interface UserCardItemProps {
  user: IChat;
}

const UserCardItem: React.FC<UserCardItemProps> = ({ user }) => {
  const timestamp = user.participants[0].lastSeen;
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dispatch = useDispatch();

  return (
    <Box
      onClick={() => dispatch(changeChatConv(user))}
      py={"2px"}
      px={2}
      sx={{
        "& #svgIcon": {
          fill: "green",
        },
        ":hover": {
          cursor: "pointer",
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
            <img src={user.participants[0].img} />
          </Avatar>
          <Box pl={1}>
            <Typography
              sx={{
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: 14,
                lineHeight: "16px",
              }}
            >
              {user.participants[0].name}
            </Typography>
            <Typography
              noWrap
              maxWidth={190}
              sx={{
                fontStyle: "normal",
                fontWeight: 200,
                fontSize: 14,
                lineHeight: "16px",
              }}
            >
              {user.messages[user.messages.length - 1].text}
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
            {`${hours}:${minutes}`}
          </Typography>
          <DobuleSeenIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardItem;
