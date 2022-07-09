import Alert from "@/components/alert";
import Card from "@/components/card";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { type QueryParamType } from "@/lib/utils/queryTools";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import React, { useState } from "react";

const Display: React.FC<DisplayProps> = ({ title, queryParam }) => {
  const { books, isError, isLoading } = useBooks(queryParam);
  const pages = Array.from({ length: Number(queryParam.limit) / 10 }, (_, i) =>
    books?.slice(i * 10, (i + 1) * 10)
  );
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg w-full p-1">{title}</h1>
      <div className="flex flex-wrap gap-6 my-4">
        {isError && <Alert.Error message="Network Error!" />}
        {isLoading
          ? Array.from({ length: 10 }, (_, i) => <Card.BookSkeleton key={i} />)
          : pages[page]?.map((book) => <Card.Book key={book.id} {...book} />)}
      </div>
      <div className="btn-group">
        <button
          className="btn btn-xs"
          onClick={() => setPage((page) => Math.max(0, page - 1))}
        >
          <FaCaretLeft />
        </button>
        {pages.map((_, i) => (
          <button
            className={"btn btn-xs" + (page === i ? " btn-active" : "")}
            onClick={(e) => setPage(Number(e.currentTarget.value))}
            key={i}
            value={i}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn btn-xs"
          onClick={() =>
            setPage((page) => Math.min(pages.length - 1, page + 1))
          }
        >
          <FaCaretRight />
        </button>
      </div>
    </div>
  );
};

interface DisplayProps {
  title: string;
  queryParam: {
    limit: number | string;
  } & Omit<QueryParamType<keyof BookTypes>, "limit">;
}

export default Display;
