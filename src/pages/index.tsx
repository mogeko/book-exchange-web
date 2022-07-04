import type { NextPage } from "next";
import Container from "@/layouts/container";
import Header from "@/layouts/header";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Container.Main>
        <h1>welcome to next.js!</h1>
      </Container.Main>
    </Container>
  );
};

export default Home;
