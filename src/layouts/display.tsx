import Alert from "@/components/alert";
import Card from "@/components/card";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { type QueryParamType } from "@/lib/utils/queryTools";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { type MouseEvent } from "react";

const DisplayRoot: React.FC<DisplayProps> = ({ children }) => {
  return <div className="flex flex-col items-center mb-14">{children}</div>;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-3xl w-full p-1">{children}</h1>;
};

const GridContext: React.FC<ContextProps> = ({ pageIndex = 0, queryParam }) => {
  const { books, isError, isLoading } = useBooks(queryParam);
  const pages = Array.from(
    { length: Math.ceil(queryParam.limit / 10) },
    (_, i) => books?.slice(i * 10, (i + 1) * 10)
  );
  return (
    <div className="flex flex-wrap gap-6 my-8 w-full">
      {isError && <Alert.Error message="Network Error!" />}
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => <Card.BookSkeleton key={i} />)
        : pages[pageIndex]?.map((book, i) => <Card.Book key={i} {...book} />)}
    </div>
  );
};

const Pagination: React.FC<PaginationProps> = ({ length, setIndex, index }) => {
  const gotoPrevPage = () => setIndex(() => Math.max(0, index - 1));
  const gotoCurrentPage = (e: MouseEvent<HTMLButtonElement>) => {
    setIndex(Number(e.currentTarget.value));
  };
  const gotoNextPage = () => setIndex(() => Math.min(length - 1, index + 1));

  return length > 1 ? (
    <div className="btn-group">
      <button className="btn btn-xs" onClick={gotoPrevPage}>
        <FaCaretLeft />
      </button>
      {Array.from({ length }, (_, i) => (
        <button
          className={"btn btn-xs" + (index === i ? " btn-active" : "")}
          onClick={gotoCurrentPage}
          key={i}
          value={i}
        >
          {i + 1}
        </button>
      ))}
      <button className="btn btn-xs" onClick={gotoNextPage}>
        <FaCaretRight />
      </button>
    </div>
  ) : (
    <></>
  );
};

const Display = Object.assign(DisplayRoot, { Header, GridContext, Pagination });

interface DisplayProps {
  children: React.ReactNode;
}

interface HeaderProps {
  children: React.ReactNode;
}

interface ContextProps {
  pageIndex?: number;
  queryParam: {
    limit: number;
  } & Omit<QueryParamType<keyof BookTypes>, "limit">;
}

interface PaginationProps {
  setIndex: (value: React.SetStateAction<number>) => void;
  index: number;
  length: number;
}

export default Display;
