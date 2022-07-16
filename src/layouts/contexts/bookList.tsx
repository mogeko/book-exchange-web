import { LongCard } from "@/components/card";
import Alert from "@/components/alert";
import { type QueryParamType } from "@/lib/utils/queryTools";
import { useBooksInfinite, type BookTypes } from "@/lib/connect/books";
import useOnScreen from "@/lib/useOnScreen";
import { useEffect, useRef } from "react";

const MAX_PAGES = 10;

const BookList: React.FC<DataProps> = ({ pages = 1, offset = 0, ...other }) => {
  const query = { ...other, limit: other.limit!, offset };
  const { data, size, setSize, ...state } = useBooksInfinite(query);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isVisiable = useOnScreen(bottomRef);

  useEffect(() => {
    if (isVisiable && !state.isValidating && size <= MAX_PAGES) {
      setSize(size + 1);
    }
  }, [isVisiable, state, size, setSize]);

  return (
    <>
      <div className="flex flex-col">
        {state.isError && <Alert.Error message="Network Error!" />}
        {state.isLoading ? (
          Array.from({ length: 10 }, (_, i) => <LongCard.Skeleton key={i} />)
        ) : (
          <div>
            {data?.map((books, i) => {
              return books.map((book, j) => {
                return <LongCard key={`${i}-${j}`} {...book} />;
              });
            })}
          </div>
        )}
      </div>
      <div ref={bottomRef} />
    </>
  );
};

type DataProps = {
  pages?: number;
} & QueryParamType<keyof BookTypes>;

export default BookList;
