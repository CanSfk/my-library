// Store
import { setModal } from "../../store/modal/action";
import { deleteLibrary } from "../../store/library/action";
import { useLibrarySlice } from "../../store/library/hooks";

// Components
import { Plus, Delete, Update } from "../icons";

export const BookItem = ({
  id,
  imgName = "",
  title = "",
  isUpdated = false,
  isDeleted = false,
}) => {
  const { library } = useLibrarySlice();
  const bk = library.find((l) => l.bookId == id);

  return (
    <div className="relative h-[380px] w-full bg-black rounded-xl overflow-hidden group">
      <img
        src={`../../../public/images/${imgName}`}
        alt={title}
        className="absolute left-0 top-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-[-70px] left-0 w-full h-[70px] p-2 bg-[rgba(0,0,0,.7)] z-10 transition-all duration-300 group-hover:bottom-0">
        <h3 className="text-sm font-bold text-white text-center">{title}</h3>
      </div>

      <div className="absolute top-2 right-2 flex gap-3">
        {isDeleted ? (
          <button
            type="button"
            onClick={() => deleteLibrary({ id })}
            className="text-red-500 p-2 rounded-full bg-white z-10 cursor-pointer"
          >
            <Delete />
          </button>
        ) : null}

        <button
          type="button"
          onClick={() =>
            setModal({
              name: "book-modal",
              data: {
                bookId: id,
                title,
                note: bk?.note ?? "",
                readStatus: bk?.readStatus ?? 1,
              },
            })
          }
          className="text-icon-primary p-2 rounded-full bg-white z-10 cursor-pointer"
        >
          {isUpdated ? <Update /> : <Plus />}
        </button>
      </div>
    </div>
  );
};
