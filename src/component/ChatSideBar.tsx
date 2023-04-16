import * as React from "react";
import { Box, MenuItem, TextField, Typography } from "@mui/material";
import UserCardItem from "./UserCardItem";
import { userData } from "../data/user";

const sortData = [
  { text: "Newset", id: 0 },
  { text: "Oldset", id: 1 },
];
const ChatSidebar: React.FC = () => {
  return (
    <Box
      py={3}
      minHeight={"100vh"}
      width={340}
      borderRight={"solid 1px rgba(0,0,0,0.1)"}
    >
      <Box mx={2}>
        <Typography mb={1} variant="h5">
          Messages
        </Typography>
        <TextField size="small" fullWidth />
        <Box my={1} sx={{ display: "flex", alignItems: "center" }}>
          <Typography mr={1}>Sort by </Typography>
          <TextField
            size="small"
            type="text"
            select
            defaultValue={sortData[0].text}
          >
            {sortData.map((item) => (
              <MenuItem key={item.id} value={item.text}>
                {item.text}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box>
        {userData.map((user) => (
          <UserCardItem key={user.name} user={user} />
        ))}
      </Box>
    </Box>
  );
};

export default ChatSidebar;
