import { DefaultLayout } from "@/layouts/layout";
import Box from "@/layouts/box";
import { tags } from "@/lib/_variable";
import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="flex w-full gap-6 flex-col c-lg:flex-row">
        <div className="flex basis-5/7 gap-14 max-w-[41rem] flex-col">
          <Popular />
          <UnpopularMasterpiece />
        </div>
        <div className="flex basis-2/7">
          <TagsCotroller />
        </div>
      </div>
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

const TagsCotroller: React.FC = () => {
  return (
    <Box title="Tags">
      {tags.map((tag, i) => (
        <Box.SubBox key={i} title={tag.name}>
          <div className="flex flex-wrap gap-2">
            {tag.items?.map((item, j) => (
              <Link key={j} href={item.href}>
                <a className="btn btn-xs">{item.name}</a>
              </Link>
            ))}
          </div>
        </Box.SubBox>
      ))}
    </Box>
  );
};

export default Home;
