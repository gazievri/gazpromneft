import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalIsOpened: false,
  },

  reducers: {
    openModal(state) {
      state.modalIsOpened = true;
    },
    closeModal(state) {
      state.modalIsOpened = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
