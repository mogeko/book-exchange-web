import Box from "@/layouts/boxes";
import { DefaultLayout } from "@/layouts/layout";
import { useBook, type BookType } from "@/lib/hooks/useBooks";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const BookPage: NextPage = () => {
  return (
    <DefaultLayout>
      <BookView />
    </DefaultLayout>
  );
};

const BookView: React.FC = () => {
  const { query } = useRouter();
  const { book, isError, isLoading } = useBook(query.id as string);

  if (isError) return <p>Error!</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <Box>
      <Box.Header>{book?.title}</Box.Header>
      <div className="my-4 flex w-full gap-3">
        <figure className="flex items-center justify-center">
          <div className="relative w-32 h-48">
            <Image src={book?.cover!} layout="fill" alt={book?.title} />
          </div>
        </figure>
        <div className="flex flex-col">
          {Object.entries(book?.mate ?? {}).map(([itemName, value], i) => {
            if (itemName === "paperback" || itemName === "hardcover") {
              return (
                <div key={i} className="inline-flex gap-1 text-base">
                  <span className="capitalize">{itemName}:</span>
                  <span>{value} pages</span>
                </div>
              );
            }
            if (itemName === "publication_date") {
              return (
                <div key={i} className="inline-flex gap-1 text-base">
                  <span className="capitalize">{itemName}:</span>
                  <span>{new Date(value).toLocaleDateString()}</span>
                </div>
              );
            }
            if (itemName === "isbn") {
              return (
                <div key={i} className="inline-flex gap-1 text-base">
                  <span className="text-sm uppercase">{itemName}:</span>
                  <span>{value}</span>
                </div>
              );
            }
            return (
              <div key={i} className="inline-flex gap-1 text-base">
                <span className="capitalize">{itemName}:</span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default BookPage;
