import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    selectedData: [],
  },

  reducers: {
    setData(state, action) {
        state.data = action.payload
    },

    setSelectedData(state, action) {
      state.selectedData = action.payload;
    },

    removeSelectedData(state) {
        state.selectedData = [];
    }
  },
});

export const { setSelectedData, removeSelectedData, setData } = dataSlice.actions;
export default dataSlice.reducer;