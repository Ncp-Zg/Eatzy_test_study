import React from "react";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Eatzy</title>
        <meta
          name="description"
          content="Everything you need to know about photography is in here.."
        />
      </Helmet>
      <Container>
        <Navbar />
        <HomeComponent />
      </Container>
    </div>
  );
};

export default Home;
