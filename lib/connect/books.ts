import useSWR, { type SWRResponse } from "swr";

function useBooks() {
  const { data, error }: SWRResponse<BookTypes[]> = useSWR("/books");
  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useBook(id: string | number) {
  const { data, error }: SWRResponse<BookTypes> = useSWR(`/books/${id}`);
  return {
    book: data,
    isLoading: !error && !data,
    isError: error,
  };
}

interface BookTypes {
  author: string;
  cover: string;
  description: string;
  id: number;
  published: string;
  publisher: string;
  title: string;
}

export default useBooks;
