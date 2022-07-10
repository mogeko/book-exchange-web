import Alert from "@/components/alert";
import Card from "@/components/card";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { type QueryParamType } from "@/lib/utils/queryTools";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import React, { useState } from "react";

const usePages = (queryParam: DisplayProps["queryParam"]) => {
  const { books, isError, isLoading } = useBooks(queryParam);
  const pages = Array.from(
    { length: Math.ceil(queryParam.limit / 10) },
    (_, i) => books?.slice(i * 10, (i + 1) * 10)
  );
  return { pages, isError, isLoading };
};

const Display: React.FC<DisplayProps> = ({ title, queryParam }) => {
  const data = usePages(queryParam);
  const [page, setPage] = useState(0);
  return (
    <div className="flex flex-col items-center mb-14">
      <Header>{title}</Header>
      <Context pageIndex={page} {...data} />
      <Pagination pageIndex={page} setPage={setPage} {...data} />
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-3xl w-full p-1">{children}</h1>;
};

const Context: React.FC<ContextProps> = (props) => {
  const { isError, isLoading, pages, pageIndex } = props;
  return (
    <div className="flex flex-wrap gap-6 my-8 w-full">
      {isError && <Alert.Error message="Network Error!" />}
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => <Card.BookSkeleton key={i} />)
        : pages[pageIndex]?.map((book, i) => <Card.Book key={i} {...book} />)}
    </div>
  );
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const { pages, setPage, pageIndex } = props;
  return pages?.length > 1 ? (
    <div className="btn-group">
      <button
        className="btn btn-xs"
        onClick={() => setPage((pageIndex) => Math.max(0, pageIndex - 1))}
      >
        <FaCaretLeft />
      </button>
      {pages.map((_, i) => (
        <button
          className={"btn btn-xs" + (pageIndex === i ? " btn-active" : "")}
          onClick={(e) => setPage(Number(e.currentTarget.value))}
          key={i}
          value={i}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="btn btn-xs"
        onClick={() => setPage(Math.min(pages.length - 1, pageIndex + 1))}
      >
        <FaCaretRight />
      </button>
    </div>
  ) : (
    <></>
  );
};

interface DisplayProps {
  title: string;
  queryParam: {
    limit: number;
  } & Omit<QueryParamType<keyof BookTypes>, "limit">;
}

interface HeaderProps {
  children: React.ReactNode;
}

type ContextProps = {
  pageIndex: number;
} & ReturnType<typeof usePages>;

type PaginationProps = {
  setPage: (value: React.SetStateAction<number>) => void;
} & ContextProps;

export default Display;
