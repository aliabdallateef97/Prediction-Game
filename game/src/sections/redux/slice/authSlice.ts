import { createSlice } from "@reduxjs/toolkit";

interface AuthType {
    userName: string;
}

const initialState:AuthType={
userName:""
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state,action) {
      state.userName = action.payload;
    },
  },
});


export const {login} =authSlice.actions

export default authSlice.reducer