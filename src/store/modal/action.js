import store from "..";
import { __removeModal, __setModal } from ".";

export const setModal = ({ name, data }) =>
  store.dispatch(__setModal({ modal_name: name, modal_data: data }));
export const removeModal = () => store.dispatch(__removeModal());
