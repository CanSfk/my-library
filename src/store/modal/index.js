import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal_name: "",
  modal_data: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    __setModal: (state, action) => {
      state.modal_name = action.payload.modal_name;
      state.modal_data = action.payload.modal_data;
    },

    __removeModal: (state) => {
      state.modal_name = "";
      state.modal_data = null;
    },
  },
});

export const { __setModal, __removeModal } = modalSlice.actions;
export default modalSlice.reducer;
