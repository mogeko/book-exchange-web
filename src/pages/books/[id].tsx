import { DefaultLayout } from "@/layouts/layout";
import BookView from "@/layouts/bookView";

import { NextPage } from "next";

const BookPage: NextPage = () => {
  return (
    <DefaultLayout>
      <BookView />
    </DefaultLayout>
  );
};

export default BookPage;
