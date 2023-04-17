import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IChat } from "../data/type";
import { userData } from "../data/user";

export enum appMode {
  noChat = "NoChat",
  onChat = "OnChat",
}

export interface ChatState {
  chat: IChat;
  appMode: appMode;
}

const initialState: ChatState = {
  chat: userData[0],
  appMode: appMode.noChat,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeChatConv: (state, action: PayloadAction<IChat>) => {
      state.chat = action.payload;
    },
    goToChat: (state) => {
      state.appMode = appMode.onChat;
    },
    BackFromChat: (state) => {
      state.appMode = appMode.noChat;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeChatConv, goToChat, BackFromChat } = chatSlice.actions;

export default chatSlice.reducer;
