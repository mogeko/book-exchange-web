import Card from "@/components/card";
import Alert from "@/components/alert";
import Pagination from "@/components/pagination";
import { type QueryParamType } from "@/lib/utils/queryTools";
import useBooks, { type BookTypes } from "@/lib/hooks/useBooks";
import { useState } from "react";

const BookGrid: React.FC<DataProps> = ({ pages = 1, offset = 0, ...other }) => {
  const [index, setIndex] = useState(0);
  const query = { ...other, offset: offset + index * other.limit! };
  const { books, isError, isLoading } = useBooks(query);
  // Cache the next page of books
  const nextOffset = query.offset + (index < pages - 1 ? query.limit! : 0);
  const _cache = useBooks({ ...other, offset: nextOffset });

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-6 my-8 w-full">
        {isError && <Alert.Error message="Network Error!" />}
        {isLoading
          ? Array.from({ length: 10 }, (_, i) => <Card.Skeleton key={i} />)
          : books?.map((book, i) => <Card key={i} {...book} />)}
      </div>
      <Pagination length={pages} index={index} setIndex={setIndex} />
    </div>
  );
};

type DataProps = {
  pages?: number;
} & QueryParamType<keyof BookTypes>;

export default BookGrid;
