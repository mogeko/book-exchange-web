import Card from "@/components/card";
import Alert from "@/components/alert";
import Pagination from "@/components/pagination";
import { type QueryParamType } from "@/lib/utils/queryTools";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { useState } from "react";

const BookGrid: React.FC<DataProps> = ({ pages = 0, offset = 0, ...query }) => {
  const [index, setindex] = useState(0);
  const _query = { ...query, offset: offset + index * query.limit! };
  const { books, isError, isLoading } = useBooks(_query);
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-6 my-8 w-full">
        {isError && <Alert.Error message="Network Error!" />}
        {isLoading
          ? Array.from({ length: 10 }, (_, i) => <Card.Skeleton key={i} />)
          : books?.map((book, i) => <Card key={i} {...book} />)}
      </div>
      <Pagination length={pages} index={index} setIndex={setindex} />
    </div>
  );
};

type DataProps = {
  pages?: number;
} & QueryParamType<keyof BookTypes>;

export default BookGrid;
