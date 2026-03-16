import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: JSON.parse(localStorage.getItem("library")) || [
    { bookId: 1, readStatus: 1, note: "Notum" },
    { bookId: 3, readStatus: 3, note: "Notum" },
  ],
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    __setLibrary: (state, action) => {
      const lib = state.library;
      const book = action.payload.book;

      const exists = lib.some((b) => b.bookId == book.bookId);

      const updatedLib = exists
        ? lib.map((b) => (b.bookId == book.bookId ? book : b))
        : [...lib, book];

      state.library = updatedLib;
      localStorage.setItem("library", JSON.stringify(updatedLib));
    },

    __deleteLibrary: (state, action) => {
      const id = action.payload.id;

      const lib = state.library.filter((b) => b.bookId !== id);

      state.library = lib;
      localStorage.setItem("library", JSON.stringify(lib));
    },
  },
});

export const { __setLibrary, __deleteLibrary } = librarySlice.actions;
export default librarySlice.reducer;
