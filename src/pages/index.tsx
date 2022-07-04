import type { NextPage } from "next";
import Container from "@/layouts/container";
import Header from "@/layouts/header";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <main>
        <h1>welcome to next.js!</h1>
      </main>
    </Container>
  );
};

export default Home;
