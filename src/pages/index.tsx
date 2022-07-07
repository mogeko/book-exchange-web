import Card from "@/components/card";
import useBooks from "@/lib/connect/books";
import { DefaultLayout } from "@/layouts/layout";
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
  const { books, isError, isLoading } = useBooks();
  if (isError) return <div>Error...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-col">
      <h1>Currently</h1>
      <div className="flex flex-wrap gap-6">
        {books?.map((book) => (
          <Card.Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
