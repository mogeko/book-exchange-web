import Alert from "@/components/alert";
import Card from "@/components/card";
import Pagination from "@/components/pagination";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { type QueryParamType } from "@/lib/utils/queryTools";

const BoxRoot: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center mb-14">
      {title && <Header>{title}</Header>}
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-3xl w-full p-1">{children}</h1>;
};

const GridBooks: React.FC<ContextProps> = ({ pageIndex = 0, ...query }) => {
  const { books, isError, isLoading } = useBooks(query);
  const pages = Array.from({ length: Math.ceil(query.limit / 10) }, (_, i) =>
    books?.slice(i * 10, (i + 1) * 10)
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

const Box = Object.assign(BoxRoot, { Header, GridBooks, Pagination });

interface BoxProps {
  title?: string;
  children: React.ReactNode;
}

interface HeaderProps {
  children: React.ReactNode;
}

type ContextProps = {
  pageIndex?: number;
  limit: number;
} & Omit<QueryParamType<keyof BookTypes>, "limit">;

export default Box;
