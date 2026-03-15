import { useEffect, useState } from "react";

// Store
import { useLibrarySlice } from "../../store/library/hooks";

// Temp Data
import { bookList } from "../../data";

// Components
import { BookItem } from "../../components/features";

export const MyLibrary = () => {
  const [myLib, setMyLib] = useState();
  const { library } = useLibrarySlice();

  const handleBookList = () => {
    const lib = library.map((item) => {
      const book = bookList.find((b) => b.id === item.bookId);

      return {
        ...book,
        readStatus: item.readStatus,
        note: item.note,
      };
    });

    setMyLib(Object.groupBy(lib, (bk) => bk.readStatus));
  };

  useEffect(() => {
    handleBookList();
  }, [library]);

  const statusMap = {
    1: "Okunacaklar",
    2: "Okunuyor",
    3: "Okundu",
  };

  return (
    <div className="flex flex-col gap-12">
      {Object.entries(statusMap).map(([status, title]) =>
        myLib?.[status] ? (
          <div key={status}>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {title}
            </h2>

            <div className="grid grid-cols-4 gap-8">
              {myLib[status].map((bk, i) => {
                return (
                  <BookItem
                    key={i}
                    id={bk.id}
                    imgName={bk.imgName}
                    title={bk.title}
                    readStatus={bk.readStatus}
                    note={bk.note}
                    isDeleted
                    isUpdated
                  />
                );
              })}
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
};
