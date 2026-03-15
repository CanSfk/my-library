import { configureStore } from "@reduxjs/toolkit";

// Slice
import modalSlice from "./modal";
import librarySlice from "./library";

export default configureStore({
  reducer: { modal: modalSlice, library: librarySlice },
});
