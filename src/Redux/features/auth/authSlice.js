import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("user");
    if (!serializedState) return { user: null };
    const data = JSON.parse(serializedState);
    return { user: data.user || null };
  } catch (err) {
    console.log("Error From loadUserFromLocalStorage ", err);
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user; 
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;