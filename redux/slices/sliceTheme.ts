import { createSlice } from "@reduxjs/toolkit";

const sliceTheme = createSlice({
  name: "theme",
  initialState: {
    colorMode: "light", // Estado inicial
  },
  reducers: {
    toggleTheme: (state) => {
      state.colorMode = state.colorMode === "light" ? "light" : "dark";
    },
    setTheme: (state, action) => {
      state.colorMode = action.payload; // Permite establecer un tema específico
    },
  },
});

export const { toggleTheme, setTheme } = sliceTheme.actions;
export default sliceTheme.reducer;