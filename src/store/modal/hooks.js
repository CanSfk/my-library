import { useSelector } from "react-redux";

export const useModalSlice = () => useSelector((state) => state.modal);
