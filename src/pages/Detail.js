import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import PostDetail from "../components/PostDetail";

const Detail = () => {
  return (
    <Container>
      <Helmet>
        <title>Post Details | Eatzy</title>
        <meta
          name="description"
          content="Everything you need to know about photography is in here.."
        />
      </Helmet>
      <Navbar />
      <Container className="d-flex justify-content-center">
        <PostDetail />
      </Container>
    </Container>
  );
};

export default Detail;
