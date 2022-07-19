import { DefaultLayout } from "@/layouts/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

const BookPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <DefaultLayout>{id && <h1>Book {id}</h1>}</DefaultLayout>;
};

export default BookPage;
