import Card from "@/components/card";
import Alert from "@/components/alert";
import { type QueryParamType } from "@/lib/utils/queryTools";
import useBooks, { type BookTypes } from "@/lib/connect/books";

const BooksGrid: React.FC<ContextProps> = ({ pageIndex = 0, ...query }) => {
  const { books, isError, isLoading } = useBooks(query);
  const pages = Array.from({ length: Math.ceil(query.limit! / 10) }, (_, i) =>
    books?.slice(i * 10, (i + 1) * 10)
  );
  return (
    <div className="flex flex-wrap gap-6 my-8 w-full">
      {isError && <Alert.Error message="Network Error!" />}
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => <Card.Skeleton key={i} />)
        : pages[pageIndex]?.map((book, i) => <Card key={i} {...book} />)}
    </div>
  );
};

type ContextProps = {
  pageIndex?: number;
} & QueryParamType<keyof BookTypes>;

export default BooksGrid;
