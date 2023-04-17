import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  TextField,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import React from "react";
import { IChat } from "../data/type";
import AttachIcon from "../assets/attachIcon";
import { useDispatch } from "react-redux";
import { BackFromChat } from "../redux/chatReducer";
import BackIcon from "../assets/backIcon";

interface ChatConversationProps {
  user: IChat;
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: "12px",
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.success.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.success.main,
    },
  },
}));

const ResiverCard: React.FC<{ text: string; clock: string }> = ({
  text,
  clock,
}) => (
  <Box
    position={"relative"}
    my={"8px"}
    sx={{ justifyContent: "flex-end", display: "flex" }}
  >
    <Box
      sx={{
        borderRadius: "16px 16px 0px 16px",
        bgcolor: "#F5F5F7",
        px: "18px",
        py: "12px",
      }}
    >
      <Typography display={"inline-block"}>{text}</Typography>
    </Box>
  </Box>
);
const SenderCard: React.FC<{ text: string; clock: string; img: string }> = ({
  text,
  clock,
  img,
}) => (
  <Box
    position={"relative"}
    my={"8px"}
    sx={{ justifyContent: "flex-start", display: "flex" }}
  >
    <Box
      sx={{
        borderRadius: "0px 16px 16px 16px",
        bgcolor: "#F5F5F7",
        px: "18px",
        py: "12px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ width: 42, height: 42 }}>
        <img src={img} />
      </Avatar>
      <Typography pl={2} display={"inline-block"}>
        {text}
      </Typography>
    </Box>
  </Box>
);

const ChatConversation: React.FC<ChatConversationProps> = ({ user }) => {
  const heightToolbar = 61;
  const dispatch = useDispatch();
  const receiverData = {
    id: user.participants[0].id,
    img: user.participants[0].img,
  };
  const HeaderChat = (
    <Box
      right={0}
      left={0}
      top={0}
      flexGrow={1}
      height={heightToolbar}
      bgcolor="#EEEEEE"
      position={"absolute"}
      sx={{ alignItems: "center", display: "flex" }}
    >
      <Avatar sx={{ ml: 2, width: 42, height: 42 }}>
        <img src={user.participants[0].img} />
      </Avatar>
      <Box pl={1} flexGrow={1}>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "16px",
          }}
        >
          {user.participants[0].name}
        </Typography>
        <Typography
          color={"green"}
          sx={{
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "16px",
          }}
        >
          Online
        </Typography>
      </Box>
      <IconButton sx={{ mr: 1 }} onClick={() => dispatch(BackFromChat())}>
        <BackIcon />
      </IconButton>
    </Box>
  );

  const FooterChat = (
    <Box
      right={0}
      left={0}
      bottom={0}
      flexGrow={1}
      height={heightToolbar}
      bgcolor="#EEEEEE"
      position={"absolute"}
      sx={{ alignItems: "center", display: "flex" }}
    >
      <IconButton sx={{ mx: 1 }}>
        <AttachIcon />
      </IconButton>
      <BootstrapInput fullWidth placeholder="Type your message here.." />
      <Button variant="text" sx={{ color: "#27AE60", minWidth: 80 }}>
        <Typography noWrap>Send</Typography>
      </Button>
    </Box>
  );

  return (
    <Box bgcolor="#FAFAFA" flexGrow={1} position={"relative"}>
      {HeaderChat}
      <Box
        position={"absolute"}
        top={heightToolbar}
        bottom={heightToolbar}
        left={0}
        right={0}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        marginX="21px"
      >
        {user.messages.map((chat, index) =>
          chat.receiver === receiverData.id ? (
            <ResiverCard key={index} clock={chat.timestamp} text={chat.text} />
          ) : (
            <SenderCard
              key={index}
              clock={chat.timestamp}
              text={chat.text}
              img={receiverData.img}
            />
          )
        )}
      </Box>
      {FooterChat}
    </Box>
  );
};

export default ChatConversation;
