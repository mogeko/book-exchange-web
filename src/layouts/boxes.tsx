import Alert from "@/components/alert";
import Card, { LongCard } from "@/components/card";
import Pagination from "@/components/pagination";
import useBooks, { type BookTypes } from "@/lib/connect/books";
import { type QueryParamType } from "@/lib/utils/queryTools";

const BoxRoot: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      {title && <Header>{title}</Header>}
      {children}
    </div>
  );
};

const SubBox: React.FC<BoxProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start my-2">
      {title && <h2 className="text-lg w-full py-1">{title}</h2>}
      {children}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1 className="text-2xl w-full py-2">{children}</h1>;
};

const GridBooks: React.FC<ContextProps> = ({ pageIndex = 0, ...query }) => {
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

const ListBooks: React.FC<ContextProps> = ({ pageIndex = 0, ...query }) => {
  const { books, isError, isLoading } = useBooks(query);
  // const isLoading = true;
  return (
    <div className="flex flex-col">
      {isError && <Alert.Error message="Network Error!" />}
      {isLoading
        ? Array.from({ length: 10 }, (_, i) => <LongCard.Skeleton key={i} />)
        : books?.map((books, i) => <LongCard key={i} {...books} />)}
    </div>
  );
};

const Box = Object.assign(BoxRoot, {
  SubBox,
  Header,
  GridBooks,
  ListBooks,
  Pagination,
});

interface BoxProps {
  title?: string;
  children: React.ReactNode;
}

interface HeaderProps {
  children: React.ReactNode;
}

type ContextProps = {
  pageIndex?: number;
} & QueryParamType<keyof BookTypes>;

export default Box;