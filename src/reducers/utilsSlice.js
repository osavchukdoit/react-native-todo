import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    showLoader: (state) => ({
      ...state,
      loading: true,
    }),
    hideLoader: (state) => ({
      ...state,
      loading: false,
    }),
    showError: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    clearError: (state) => ({
      ...state,
      error: null,
    }),
  },
});

export const { showLoader, hideLoader, showError } = utilsSlice.actions;
const utilsReducer = utilsSlice.reducer;
export default utilsReducer;
