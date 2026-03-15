// Slice
import { useModalSlice } from "../store/modal/hooks";

// Mapping
import { modalMap } from "../mappings/modal-map";

export const Modals = () => {
  const { modal_name } = useModalSlice();

  const currentModal = modalMap.find((md) => md.name === modal_name);

  if (!currentModal) return null;

  return (
    <div
      style={{ opacity: 0 }}
      className="fixed inset-0 bg-[rgba(0,0,0,.4)] z-[1002] custom-opacity-animate-200"
    >
      <currentModal.element />
    </div>
  );
};

export default Modals;
