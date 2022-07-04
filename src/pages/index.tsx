import type { NextPage } from "next";
import Container from "@/layouts/container";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Container.Main>
        <></>
      </Container.Main>
      <Footer time={2022} author="Zheng Junyi" />
    </Container>
  );
};

export default Home;
