import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../data";

const userSlice = createSlice({
  name: "users",
  initialState: { userList: userData },
  reducers: {
    addUser(state, action) {
      state.userList.push(action.payload);
    },
    updateUser(state, action) {
      state.userList.map((user) => {
        if (user.id === action.payload.id) {
          user.userName = action.payload.userName;
        }
      });
    },
    deleteUser(state, action) {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
