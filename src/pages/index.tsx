import { DefaultLayout } from "@/layouts/layout";
import Window from "@/layouts/window";
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
    <Window>
      <Window.Header>Recently Popular</Window.Header>
      <Window.GridBooks pageIndex={page} limit={50} />
      <Window.Pagination index={page} setIndex={setPage} length={5} />
    </Window>
  );
};

const UnpopularMasterpiece: React.FC = () => {
  return (
    <Window>
      <Window.Header>Unpopular but Highly Rated</Window.Header>
      <Window.GridBooks limit={5} />
    </Window>
  );
};

export default Home;
