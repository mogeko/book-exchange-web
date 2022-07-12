import { DefaultLayout } from "@/layouts/layout";
import Display from "@/layouts/display";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex max-w-[43rem]">
        <div className="flex flex-col w-full">
          <Popular />
          <UnpopularMasterpiece />
        </div>
      </div>
      <div className="flex w-full"></div>
    </DefaultLayout>
  );
};

const Popular: React.FC = () => {
  const [page, setPage] = useState(0);
  return (
    <Display>
      <Display.Header>Recently Popular</Display.Header>
      <Display.GridContext pageIndex={page} queryParam={{ limit: 50 }} />
      <Display.Pagination index={page} setIndex={setPage} length={5} />
    </Display>
  );
};

const UnpopularMasterpiece: React.FC = () => {
  return (
    <Display>
      <Display.Header>Unpopular but Highly Rated</Display.Header>
      <Display.GridContext queryParam={{ limit: 5 }} />
    </Display>
  );
};

export default Home;
