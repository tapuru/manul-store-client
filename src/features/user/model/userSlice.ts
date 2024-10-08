import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { User } from "../types";

interface AuthState {
  user: User | null;
  token: string | null
}
const initialState: AuthState = {
  user: null,
  token: null
}

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { logOut, setCredentials } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;