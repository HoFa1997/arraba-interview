import { Box, CssBaseline } from "@mui/material";
import ChatConversation from "./component/ChatConverstion";
import ChatSidebar from "./component/ChatSideBar";
import Sidebar from "./component/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const chat = useSelector((state: RootState) => state.chat.chat);

  return (
    <>
      <CssBaseline />
      <Box display={"flex"}>
        <Sidebar />
        <ChatSidebar />
        <Box display={{ xs: "none", md: "flex" }} flexGrow={1}>
          <ChatConversation user={chat} />
        </Box>
      </Box>
    </>
  );
}

export default App;
