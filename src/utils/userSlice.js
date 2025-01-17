import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    showProfile: false,
  },
  reducers: {
    addUser: (state, action) => {
      localStorage.setItem("user",JSON.stringify(action.payload))
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
    toggleProfile :(state) => {
      state.showProfile = !state.showProfile
    }
  },
});

export const { addUser, removeUser, toggleProfile } = userSlice.actions;
export default userSlice.reducer;
