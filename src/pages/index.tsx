import Alert from "@/components/alert";
import Card from "@/components/card";
import useBooks from "@/lib/connect/books";
import { DefaultLayout } from "@/layouts/layout";
import React, { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex max-w-[43rem]">
        <div className="flex flex-col w-full">
          <Popular />
        </div>
      </div>
      <div className="flex w-full"></div>
    </DefaultLayout>
  );
};

const Popular: React.FC = () => {
  const { books, isError, isLoading } = useBooks({ limit: 50 });
  const pages = Array.from({ length: 5 }, (_, i) =>
    books?.slice(i * 10, (i + 1) * 10)
  );
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg w-full p-1">Currently</h1>
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

export default Home;
