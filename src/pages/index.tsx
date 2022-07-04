import type { NextPage } from "next";
import Container from "@/layouts/container";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Container.Main>
        <h1>welcome to next.js!</h1>
      </Container.Main>
      <Footer time={2022} author="Zheng Junyi" />
    </Container>
  );
};

export default Home;
