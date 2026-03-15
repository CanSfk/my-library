// Store
import { useLibrarySlice } from "../../store/library/hooks";

// Temp data
import { bookList } from "../../data";

// Components
import { BookItem } from "../../components/features";

export const List = () => {
  const { library } = useLibrarySlice();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-text-primary">Kitaplar</h2>

      <div className="grid grid-cols-4 gap-8">
        {bookList.map((bk, i) => {
          return (
            <BookItem
              key={i}
              id={bk.id}
              imgName={bk.imgName}
              title={bk.title}
              isUpdated={library.map((l) => l.bookId).includes(bk.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
