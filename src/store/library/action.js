import store from "..";
import { __setLibrary, __deleteLibrary } from ".";

export const setLibrary = ({ book }) => store.dispatch(__setLibrary({ book }));
export const deleteLibrary = ({ id }) =>
  store.dispatch(__deleteLibrary({ id }));
