import { Box, CssBaseline } from "@mui/material";
import ChatConversation from "./component/ChatConverstion";
import Layout from "./component/layout";
import { userData } from "./data/user";
import ChatSidebar from "./component/ChatSideBar";
import Sidebar from "./component/SideBar";
import { useSelector } from "react-redux";
import { ChatState } from "./redux/chatReducer";
import { RootState } from "./redux/store";

function App() {
  const chat = useSelector((state: RootState) => state.chat.chat);

  return (
    <>
      <CssBaseline />
      <Box display={"flex"}>
        <Sidebar />
        <ChatSidebar />
        <ChatConversation user={chat} />
      </Box>
    </>
  );
}

export default App;
