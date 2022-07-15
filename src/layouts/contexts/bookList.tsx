import { LongCard } from "@/components/card";
import Alert from "@/components/alert";
import { type QueryParamType } from "@/lib/utils/queryTools";
import useBooks, { type BookTypes } from "@/lib/connect/books";

const BookList: React.FC<DataProps> = ({ pageIndex = 0, ...query }) => {
  const { books, isError, isLoading } = useBooks(query);
  return (
    <div className="flex flex-col">
      {isError && <Alert.Error message="Network Error!" />}
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => <LongCard.Skeleton key={i} />)
        : books?.map((books, i) => <LongCard key={i} {...books} />)}
    </div>
  );
};

type DataProps = {
  pageIndex?: number;
} & QueryParamType<keyof BookTypes>;

export default BookList;
