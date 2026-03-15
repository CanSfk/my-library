// Store
import { removeModal } from "../../store/modal/action";

export const ModalContainer = ({ title = "Title", children }) => {
  return (
    <div className="w-full h-full p-5 grid place-items-center overflow-y-auto max-md:p-2">
      <div className="w-full bg-white rounded-xl max-w-[800px]">
        <div className="flex flex-col gap-4 bg-white p-10 rounded-xl max-md:p-6">
          <div className="flex items-center justify-between gap-6">
            <h4 className="font-semibold text-xl text-textDark">{title}</h4>

            <button
              onClick={() => removeModal(false)}
              className="cursor-pointer p-2 rounded-full text-customBordo mb-auto transition-all duration-300 hover:bg-customBordo/40"
            >
              X
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
