import { useSelector } from "react-redux";

export const useLibrarySlice = () => useSelector((state) => state.library);
