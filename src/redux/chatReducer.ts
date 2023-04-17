import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IChat } from "../data/type";
import { userData } from "../data/user";

export interface ChatState {
  chat: IChat;
}

const initialState: ChatState = {
  chat: userData[0],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeChatConv: (state, action: PayloadAction<IChat>) => {
      state.chat = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeChatConv } = chatSlice.actions;

export default chatSlice.reducer;
