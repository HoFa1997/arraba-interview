import { Box, CssBaseline } from "@mui/material";
import ChatConversation from "./component/ChatConverstion";
import ChatSidebar from "./component/ChatSideBar";
import Sidebar from "./component/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { appMode } from "./redux/chatReducer";
import { motion } from "framer-motion";

function App() {
  const chat = useSelector((state: RootState) => state.chatState.chat);
  const modeState = useSelector((state: RootState) => state.chatState.appMode);

  return (
    <>
      <CssBaseline />
      <Box display={"flex"}>
        <Sidebar />
        {modeState === appMode.noChat ? (
          <>
            <ChatSidebar />
            <Box display={{ xs: "none", md: "flex" }} flexGrow={1}>
              <ChatConversation user={chat} />
            </Box>
          </>
        ) : (
          <motion.div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
          >
            <ChatConversation user={chat} />
          </motion.div>
        )}
      </Box>
    </>
  );
}

export default App;
