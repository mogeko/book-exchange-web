import { DefaultLayout } from "@/layouts/layout";
import Box from "@/layouts/box";
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
    <Box>
      <Box.Header>Recently Popular</Box.Header>
      <Box.GridBooks pageIndex={page} limit={50} />
      <Box.Pagination index={page} setIndex={setPage} length={5} />
    </Box>
  );
};

const UnpopularMasterpiece: React.FC = () => {
  return (
    <Box>
      <Box.Header>Unpopular but Highly Rated</Box.Header>
      <Box.GridBooks limit={5} />
    </Box>
  );
};

export default Home;
