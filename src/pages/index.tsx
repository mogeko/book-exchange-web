import { DefaultLayout } from "@/layouts/layout";
import Display from "@/layouts/display";
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
  return <Display title="Recently Popular" queryParam={{ limit: 50 }} />;
};

export default Home;
